from report_analyzer import ReportAnalyzer
from g3000_loader_adapter import G3000LoaderAdapter


# Código exemplo para simular a API Gerenciator3000
class ReportLoader:
    def __init__(self):
        self.headers = ["id", "date", "final_price"]
        self.rows = [
            [1337, "2020-11-20", 2350.5],
            [1338, "2020-11-21", 4800.5],
        ]


g3000_loader = ReportLoader()
print(g3000_loader.headers)   # ['id', 'date', ..., 'final_price']
print(g3000_loader.rows[0])  # [1337, '2020-11-20', ..., 2350.5]

loader = G3000LoaderAdapter(g3000_loader)
# o analyzer do nosso sistema recebe o adaptador como qualquer outro loader
analyzer = ReportAnalyzer(loader)
analyzer.average()  # Agora funcionará
