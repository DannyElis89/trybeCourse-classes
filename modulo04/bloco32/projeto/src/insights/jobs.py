from functools import lru_cache
from typing import List, Dict
import csv


@lru_cache
def read(path: str) -> List[Dict]:
    with open(path) as file:
        arquivo_reader = csv.DictReader(file, delimiter=',', quotechar='"')
        return list(arquivo_reader)


def get_unique_job_types(path: str) -> List[str]:
    list_of_jobs = read(path)
    list_of_jobs_types = []

    for row in list_of_jobs:
        type_job = row["job_type"]
        if type_job not in list_of_jobs_types:
            list_of_jobs_types.append(type_job)

    return list_of_jobs_types


def filter_by_job_type(jobs: List[Dict], job_type: str) -> List[Dict]:
    jobs_filter = []
    for job in jobs:
        if job['job_type'] == job_type:
            jobs_filter.append(job)
    return jobs_filter
