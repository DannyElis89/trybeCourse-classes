import pytest
from ting_file_management.priority_queue import PriorityQueue


def test_basic_priority_queueing():
    file_1 = {
        "nome_do_arquivo": "file 1",
        "qtd_linhas": 9,
        "linhas_do_arquivo": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    }

    file_2 = {
        "nome_do_arquivo": "file 2",
        "qtd_linhas": 2,
        "linhas_do_arquivo": [1, 2],
    }

    priority = PriorityQueue()
    assert len(priority) == 0

    priority.enqueue(file_1)
    assert len(priority) == 1

    priority.enqueue(file_2)
    assert len(priority) == 2

    assert priority.search(1)["nome_do_arquivo"] == "file 1"
    assert priority.search(1)["qtd_linhas"] == 9

    assert priority.search(0)["nome_do_arquivo"] == "file 2"
    assert priority.search(0)["qtd_linhas"] == 2

    assert priority.is_priority(file_1) is False
    assert priority.is_priority(file_2) is True

    priority.dequeue()
    assert len(priority) == 1

    priority.dequeue()
    assert len(priority) == 0

    with pytest.raises(IndexError):
        priority.search(2)
