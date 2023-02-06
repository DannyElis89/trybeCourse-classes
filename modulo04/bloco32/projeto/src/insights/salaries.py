from typing import Union, List, Dict
import csv


def get_max_salary(path: str) -> int:
    with open(path) as path:
        arquivo_reader = csv.DictReader(path, delimiter=',', quotechar='"')
        list_of_salaries = [
            float(job["max_salary"])
            for job in arquivo_reader
            if job["max_salary"].isdigit()
        ]

        return max(list_of_salaries)


def get_min_salary(path: str) -> int:
    with open(path) as path:
        arquivo_reader = csv.DictReader(path, delimiter=',', quotechar='"')
        list_of_salaries = [
            float(job["min_salary"])
            for job in arquivo_reader
            if job["min_salary"].isdigit()
        ]

        return min(list_of_salaries)


def matches_salary_range_auxiliar(job: Dict, salary: Union[int, str]) -> bool:
    if job["max_salary"] == '' or job["min_salary"] == '':
        raise ValueError
    if int(job["max_salary"]) < int(job["min_salary"]):
        raise ValueError
    if int(job["max_salary"]) >= int(salary) >= int(job["min_salary"]):
        return True
    return False


def matches_salary_range(job: Dict, salary: Union[int, str]) -> bool:
    try:
        return matches_salary_range_auxiliar(job, salary)
    except KeyError:
        raise ValueError
    except TypeError:
        raise ValueError


def filter_by_salary_range(
    jobs: List[dict],
    salary: Union[str, int]
) -> List[Dict]:
    jobs_list = []

    for job in jobs:
        try:
            if matches_salary_range(job, salary):
                jobs_list.append(job)
        except ValueError:
            ...
    return jobs_list
