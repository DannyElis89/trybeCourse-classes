from src.pre_built.brazilian_jobs import read_brazilian_file


def test_brazilian_jobs():
    dict_mock01 = {
        "title": "Maquinista",
        "salary": "2000",
        "type": "trainee",
    }
    dict_mock02 = {
        "title": "Motorista",
        "salary": "3000",
        "type": "full time"
    }
    dict_mock03 = {
        "title": "Analista de Software",
        "salary": "4000",
        "type": "full time"
    }

    translate_dict = read_brazilian_file('tests/mocks/brazilians_jobs.csv')
    assert dict_mock01 in translate_dict
    assert dict_mock02 in translate_dict
    assert dict_mock03 in translate_dict
