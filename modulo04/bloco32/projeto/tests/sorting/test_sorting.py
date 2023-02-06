from src.pre_built.sorting import sort_by


def test_sort_by_criteria():
    jobs_list = [
        {"min_salary": 1000, "max_salary": 9000, "date_posted": "2023-02-24"},
        {"min_salary": 3000, "max_salary": 10000, "date_posted": "2023-01-10"},
        {"min_salary": 5000, "max_salary": 16000, "date_posted": "2023-01-20"},
    ]

    compara = jobs_list[:]

    sort_by(jobs_list, "min_salary")
    assert jobs_list == [compara[0], compara[1], compara[2]]
    sort_by(jobs_list, "max_salary")
    assert jobs_list == [compara[2], compara[1], compara[0]]
    sort_by(jobs_list, "date_posted")
    assert jobs_list == [compara[0], compara[2], compara[1]]
