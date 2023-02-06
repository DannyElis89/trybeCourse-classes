from src.pre_built.counter import count_ocurrences


def test_counter():
    count = count_ocurrences("data/jobs.csv", "javascript")
    # print(count)
    assert count == 122
