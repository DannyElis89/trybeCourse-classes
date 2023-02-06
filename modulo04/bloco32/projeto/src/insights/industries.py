from typing import List, Dict
# from jobs import read
import csv


def get_unique_industries(path: str) -> List[str]:
    with open(path) as file:
        arquivo_reader = csv.DictReader(file, delimiter=',', quotechar='"')
        list_of_industries = []

        for row in arquivo_reader:
            industry = row['industry']
            if industry != '':
                if industry not in list_of_industries:
                    list_of_industries.append(industry)
        return list_of_industries


def filter_by_industry(jobs: List[Dict], industry: str) -> List[Dict]:
    jobs_filter = []
    for job in jobs:
        if job['industry'] == industry:
            jobs_filter.append(job)
    return jobs_filter
