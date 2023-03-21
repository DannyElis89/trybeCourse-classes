def exists_word(word, instance):
    data = []
    for position in range(len(instance)):
        value = instance.search(position)

        values = {
            "palavra": word,
            "arquivo": value["nome_do_arquivo"],
            "ocorrencias": [],
        }

        for index, line in enumerate(value["linhas_do_arquivo"]):
            lines = line.lower()
            if word.lower() in lines:
                values["ocorrencias"].append(
                    {"linha": index + 1}
                )
        if len(values["ocorrencias"]) > 0:
            data.append(values)
    return data


def search_by_word(word, instance):
    """Aqui irá sua implementação"""
