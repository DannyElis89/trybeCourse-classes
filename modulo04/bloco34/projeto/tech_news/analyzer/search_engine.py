from tech_news.database import search_news
import datetime


# Requisito 7
def search_by_title(title):
    news = search_news({"title": {"$regex": title, "$options": "i"}})
    results = []

    if news:
        for new in news:
            obj = (new["title"], new["url"])
            results.append(obj)

    return results


# Requisito 8
def search_by_date(date):
    try:
        datetime.date.fromisoformat(date)
    except ValueError:
        raise ValueError("Data inválida")

    br_date = date[8:10] + "/" + date[5:7] + "/" + date[:4]
    news = search_news({"timestamp": {"$regex": br_date}})
    results = []

    if news:
        for new in news:
            obj = (new["title"], new["url"])
            results.append(obj)
    return results


# Requisito 9
def search_by_category(category):
    news = search_news({
      "category": {
        "$regex": category, "$options": "i"
      }})
    results = []

    if news:
        for new in news:
            obj = (new["title"], new["url"])
            results.append(obj)
    return results
