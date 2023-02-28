from unittest.mock import patch
from tech_news.analyzer.reading_plan import ReadingPlanService
import pytest


mock_books = [
    {
        "title": "Livro 1",
        "reading_time": 5,
    },
    {
        "title": "Livro 2",
        "reading_time": 2,
    },
    {
        "title": "Livro 4",
        "reading_time": 10,
    },
    {
        "title": "Livro 5",
        "reading_time": 15,
    },
    {
        "title": "Livro 6",
        "reading_time": 12,
    },
]


def test_reading_plan_group_news():
    with patch(
        "tech_news.analyzer.reading_plan.find_news", return_value=mock_books
    ):
        result = ReadingPlanService.group_news_for_available_time(10)
        assert result == {
            "readable": [
                {
                    "unfilled_time": 3,
                    "chosen_news": [("Livro 1", 5), ("Livro 2", 2)],
                },
                {
                    "unfilled_time": 0,
                    "chosen_news": [("Livro 4", 10)],
                },
            ],
            "unreadable": [("Livro 5", 15), ("Livro 6", 12)],
        }

    with pytest.raises(
        ValueError, match="Valor 'available_time' deve ser maior que zero"
    ):
        return ReadingPlanService.group_news_for_available_time(0)
