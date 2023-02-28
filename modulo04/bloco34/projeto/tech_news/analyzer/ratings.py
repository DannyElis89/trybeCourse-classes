from tech_news.database import find_news
from collections import Counter


# Requisito 10
def top_5_categories():
    response = [
      news["category"] for news in find_news() if news["category"]
    ]

    counter = Counter(response).most_common(5)

    news_list = []

    for news in sorted(counter, key=lambda x: (-x[1], x[0])):
        news_list.append(news[0])

    return news_list
