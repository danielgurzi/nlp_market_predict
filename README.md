# NLP Stock Predict

Most lay people don't make financial decisions in the stock market because they understand the numbers, at least not beyond buy low, sell high.  They do a bit of reading and then follow the trends. Financial analysts and stock brokers spend their entire day reading and studying what's happening with certain companies.
I propose scraping financial sites such as www.seekingalpha.com and using NLP to predict stock fluctuations based on current sentiment around a given ticker symbol. I will study historical stock data around a given company, and establish a baseline solely based on recent stock price data. Then I will 'read' related articles posted about that company to get a sense of confidence around that particular stock. Using NLP vectorization, I can develop a model to predict if a given stock should be bought or sold today, with the ability to ask the question again each day. The success of the project will be measured by the accuracy of the predictions. 


### Libraries:
Required libraries to run this code:  
**Selenium** - for webscraping  
**yfinance** - for stock info  
**sklearn** - for models and EDA work  
**tensorflow** - for RNN modeling and predicting  
And a number of other more common libraries  


### Data
There are two data sources needed for this project:

1) The stock information is coming from yahoo finance's python library  
2) The news articles are coming from seekingalpha.com

### The Process:
- Input the ticker symbol that we're interested in predicting.  
- We will then gather the most recent news articles for the ticker
- Clean and Vectorize each article's content
- KMeans Cluster the article vectors
- Merge article clusters to the most recent Stock financials
- Run the RNN model to predict one of the three outputs:

    - "BUY"
    - "HOLD"
    - "DON'T BUY"



## Directory
```bash
.
├── README.md
├── data
│   ├── data_generation_eda
│   │   ├── Harvey_Cluster_EDA.ipynb
│   │   ├── Kmeans_Result.ipynb
│   │   ├── trials/
│   │   └── w2v_trial.ipynb
├── pickle_jar
│   │   ├── answer
│   │   ├── art_clusterer_pkl
│   │   ├── articlePickle
│   │   ├── articles_predict
│   │   ├── model_1.h5
│   │   ├── model_scaler
│   │   └── name_clusterer_pkl
│   ├── training
│   │   ├── AAPL_news_history
│   │   ├── all_news_history
│   │   ├── all_news_history_bu
│   │   ├── MSFT_news_history
│   │   ├── TSLA_news_history
└── jupyter_notebooks
    ├── article_eda.ipynb
    ├── article_gather.ipynb
    ├── model_1_training.ipynb
    ├── model_baseline.ipynb    
    └── ticker_info.ipynb
 ``
