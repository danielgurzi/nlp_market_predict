
PROBLEM STATEMENT
Most lay people don't make financial decisions in the stock market because they understand the numbers, at least not beyond buy low, sell high.  They do a bit of reading and then follow the trends. Financial analysts and stock brokers spend their entire day reading and studying what's happening with certain companies.
I propose using NLP to predict stock fluctuations based on current sentiment around a given ticker symbol. I will study historical stock data around a given company, and establish a baseline solely based on recent stock price data. Then I will 'read' related articles posted about that company to get a sense of confidence around that particular stock. Using NLP vectorization, I can develop a model to predict if a given stock should be bought or sold today, with the ability to ask the question again each day.


RISKS: might not work. Probably will give me something, might not. Have to avoid getting IP flagged by websites

Assumptions: News articles and Press Releases have impact on stock market prices. And those impacts are measurable within a repeatable time frame.


DATA SOURCES:
yfinance python library for stock info
marketwatch.com for articles
www.seekingalpha.com for articles & press releases
trying nasdaq.com but struggling

EDA:
can get stock info into a dataframe for analysis. yfinance brings a lot of info, so I will probably reconfigure some imports to eliminate some columns to streamline some things.

Still working on beautifulsoup import to get the pages I want, how I want them.


questions: 
