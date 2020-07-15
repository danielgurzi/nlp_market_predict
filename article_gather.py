#!/usr/bin/env python

# Run our imports
import pandas as pd
import numpy as np
import pickle

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
import re
import string
import time

from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans
from sklearn import cluster, metrics
from sklearn.manifold import TSNE
from scipy.spatial.distance import cdist

from tensorflow.keras.models import Sequential, load_model
from tensorflow.keras.layers import Dense, Dropout, GRU
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.preprocessing.sequence import TimeseriesGenerator

from datetime import date, timedelta, datetime
from gensim.models import Word2Vec, KeyedVectors

import yfinance as yf

print("Enter your ticker symbol:")
ticker = input()
stock = yf.Ticker(ticker).history()


def articles(ticker):

    print('Gathering Articles')

    def get_article_links(ticker):
        # Set the URL for gathering articles about the ticker
        url = f'https://seekingalpha.com/symbol/{ticker}/news'

        # open the Selenium driver to the url
        driver = webdriver.Chrome('./chromedriver')
        driver.implicitly_wait(50)
        driver.get(url)
        while True:
            time.sleep(10)
            if driver.find_elements_by_class_name("_1-r1S"):
                break
        links = driver.find_elements_by_class_name("_1-r1S")

        # gather the links for the most recent articles
        links = driver.find_elements_by_class_name("_1-r1S")

        df = pd.DataFrame()
        df['date'] = [i.find_element_by_class_name("VbEwc").text for i in links]
        df['name'] = [i.find_element_by_tag_name("h3").text for i in links]
        df['href'] = [i.find_elements_by_tag_name('a')[0].get_property('href') for i in links]

        # close the Seleium driver
        driver.close()

        # Clean it up to take out special characters from the article name
        df['name'] = [re.sub('[^A-Za-z0-9 $]+', '', i) for i in df['name']]

        return df

    def get_articles(ticker):

        df = get_article_links(ticker)

        # Open the Selenium Driver
        driver = webdriver.Chrome('./chromedriver')
        #start a list of the articles
        art_list = []
        # for loop to go through each of the links and grab the articles
        for link in df['href']:
            driver.get(link)
            while True:
                try:
                    driver.find_element_by_id("a-cont")
                    break
                except:
                    pass
                try:
                    driver.find_element_by_class_name('premium-banner')
                    break
                except:
                    pass
            try:
                article = driver.find_element_by_id("a-cont")
            except:
                article = 'error'
            # The Article has comments, which for now I am going to take out. This code will separate the article into two sections with "Like this article" as the separator
            sep = 'Recommended for you:'
            try:
                art_list.append(article.text.split(sep,1)[0])
            except:
                art_list.append('error')
        df['article'] = art_list

        # close the Seleium driver
        driver.close()

        return df

    df = get_articles(ticker)


    # This function will run through the list again and re-try error pages
    def finish_qurom(df):
        driver = webdriver.Chrome('./chromedriver')
        #start a list of the articles
        art_list = []
        # grap the comments while I'm here
        comments = []
        # for loop to go through each of the links and grab the articles
        for r,c in df.iterrows():
            if c[3] == 'error':
                sep = 'Recommended for you:'
                driver.get(c[2])
                driver.implicitly_wait(50)
                try:
                    if driver.find_element_by_class_name('premium-banner'):
                        df['article'][r] = 'premium-banner'
                except:
                    try:
                        df['article'][r] = driver.find_element_by_id("a-cont").text.split(sep,1)[0]
                    except:
                        article = 'error'
                    try:
                        df['comments'][r] = driver.find_element_by_id("a-cont").text.split(sep,1)[1]
                    except:
                        comments.append('error')
        driver.close()

        return df

    # run this new function to catch and sort errors
#     df1 = finish_qurom(df)

    df = df[df.article != 'premium-banner']


    print("Articles gathered...vectorizing")
    # import google's word2vec located: https://drive.google.com/file/d/0B7XkCwpI5KDYNlNUTTlSS21pQmM/edit?usp=sharing
    w2v_model = KeyedVectors.load_word2vec_format('../../Downloads/GoogleNews-vectors-negative300.bin', binary=True)

    # function for converting articles and article names into KeyedVectors

    def clean2vect(articles):
        new_list = []
        for a in articles:
            new_list.append(a.replace(',','').translate(string.punctuation))

        clean_articles = [word.split() for word in new_list]

        vects = []

        for a in clean_articles:
            vector = []
            for word in a:
                try:
                    vector.append(w2v_model[word])
                except:
                    continue
            try:
                vects.append(sum(vector)/len(vector))
            except:
                vects.append(1)
        return vects

    # run both df columns through the clean2vect function which will append them to the df
    df['article_vect'] = clean2vect(df['article'])
    df['name_vect'] = clean2vect(df['name'])

    print("Vectorized...seting datetime index")

    # clean up the dates from the articles to match the datetime format of the stock def
    def art_date(df):
        dates = []
        for i in df.date:
            if "Today" in i:
                dates.append('2020-' + str(i.replace(i, date.today().strftime("%m-%d"))))
            elif 'Sat, Feb. 29' in i:
                dates.append('2020-03-01')
            elif "Yesterday" in i:
                dates.append('2020-' + str(i.replace(i, (date.today() - timedelta(days = 1)).strftime("%m-%d"))))
            else:
                try:
                    dates.append('2020-' + str(datetime.strptime(i,'%a, %b. %d').strftime('%m-%d')))
                except:
                    try:
                        dates.append('2020-' + str(datetime.strptime(i,'%a, %b %d').strftime('%m-%d')))
                    except:
                        dates.append(str(datetime.strptime(i,'%a, %b. %d, %Y').strftime('%Y-%m-%d')))
        # set dataframe to new dates columns as index
        df.date = dates
        df.date = pd.to_datetime(df['date'])
        df.set_index('date', inplace=True)
        df.sort_index(inplace=True)
        return df

    df = art_date(df)

    print('Datetime Ready...Clustering...')

    # Import pickle of trained KMeans Article Cluster Model
    art_kluster_model = open('./pickle_jar/art_clusterer_pkl', 'rb')
    art_kclusterer = pickle.load(art_kluster_model)
    art_kluster_model.close()

    # Import pickle of trained KMeans Name Cluster Model
    name_kluster_model = open('./pickle_jar/name_clusterer_pkl', 'rb')
    name_kclusterer = pickle.load(name_kluster_model)
    name_kluster_model.close()


    # assign clusters to new articles based on trained model
    df['art_clusters'] = [art_kclusterer.classify_vectorspace(vector) for vector in df['article_vect']]
    df['name_clusters'] = [name_kclusterer.classify_vectorspace(vector) for vector in df['article_vect']]

    # pickle articles dataframe with new info before merging to X Features
    with open('./pickle_jar/articles_predict', 'wb') as fp:
        pickle.dump(df, fp)

    df.drop(['name','article','href', 'article_vect','name_vect'], axis=1, inplace=True)

    print('Getting Ticker Info')

    def get_stock(ticker):
        stock = yf.Ticker(ticker).history()
        stock.columns = [i.lower() for i in stock.columns]
        stock = stock.pct_change()
        stock[['dividends','stock splits']] = stock[['dividends','stock splits']].fillna(0)
        stock.dropna(inplace=True)

        return stock

    stock = get_stock(ticker)

    X = pd.merge(stock, df.groupby('date').mean(), left_index=True, right_index=True, how='right')
    X.ffill(inplace=True)
    X.fillna(2, inplace=True)

    # get the model scaler
    dbfile = open('./pickle_jar/model_scaler', 'rb')
    sc = pickle.load(dbfile)
    dbfile.close()

    #scale the new X and create dummy target column
    X_new_sc = sc.transform(X)
    y_dummy = np.zeros((X_new_sc.shape[0], ))

    print('Modeling Predictions')

    # Load the trained model
    model = load_model('./pickle_jar/model_1.h5')

    # create new test sequencer for new data
    new_test_seq = TimeseriesGenerator(X_new_sc
                                   , y_dummy
                                   , length=3
                                   , batch_size=64)
    #predict classes of new data on the trained model
    answer = model.predict(new_test_seq)
    # add predictions to dataframe
    X['first'] = [0,0,0] + [1 if i[0][0] >= .5 else 0 for i in answer]
    X['second'] = [0,0,0] + [1 if i[1][0] >= .5 else 0 for i in answer]
    X['third'] = [0,0,0] + [1 if i[1][0] >= .5 else 0 for i in answer]
    X['prediction'] = [(c[9] + c[10] + c[11]) for r,c in X.iterrows()]

    with open('./pickle_jar/answer', 'wb') as fp:
        pickle.dump(X, fp)

    if X['prediction'][-1] == 3.0:
        return f'Today we are predicting you should BUY {ticker} stock'
    elif X['prediction'][-1] == 0.0:
        return f'Today we are predicting you should SELL {ticker} stock'
    else:
        return f'Today we are predicting a HOLD for {ticker} stock'
     
articles(ticker)
