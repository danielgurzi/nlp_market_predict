def get_subreddit(subreddit, n_samples):
    base_url = 'https://api.pushshift.io/reddit/submission/search'
    list_posts = []
    oldest_post = None
    while len(list_posts) < n_samples:
        params = {
            "subreddit" : subreddit,
            "size" : 1000,
            "before": oldest_post
            }
        res = requests.get(base_url,params)
        posts = res.json()['data']
        if len(posts) == 0:
            oldest_post = None
            list_posts.extend(posts)
        else:
            time.sleep(3) #Learned this in class, we want to limit our queries to once every 3 seconds.
            oldest_post = dt.datetime.fromtimestamp(posts[-1]["created_utc"])
            list_posts.extend(posts)
    return pd.DataFrame(list_posts)
