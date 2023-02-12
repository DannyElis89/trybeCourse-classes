from dbSimulator import DbSimulator
from databaseIterator import DatabaseIterator
from collections.abc import Iterable


class DatabaseIterable(Iterable):
    def __init__(self, db, query):
        self.db = db
        self.query = query

    """Aqui retornamos qual é o objeto que realiza a iteração"""
    def __iter__(self):
        return DatabaseIterator(self.db, self.query)


record_paginator = DatabaseIterable(DbSimulator(), "select * from person")
for page in record_paginator:
    for record in page:
        print(record["name"])
