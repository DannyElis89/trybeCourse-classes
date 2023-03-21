import sys
from ting_file_management.queue import Queue
from ting_file_management.file_management import txt_importer


def process(path_file, instance: Queue):
    data = txt_importer(path_file)
    formatted_data = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(data),
        "linhas_do_arquivo": data,
    }

    for position in range(len(instance)):
        value = instance.search(position)
        if value["nome_do_arquivo"] == path_file:
            return

    instance.enqueue(formatted_data)
    print(formatted_data, file=sys.stdout)


def remove(instance):
    if not len(instance):
        print("Não há elementos")
    else:
        path_file = instance.dequeue()['nome_do_arquivo']
        print(f"Arquivo {path_file} removido com sucesso")


def file_metadata(instance, position):
    try:
        result = instance.search(position)
        print(result, file=sys.stdout)
    except IndexError:
        print("Posição inválida", file=sys.stderr)
