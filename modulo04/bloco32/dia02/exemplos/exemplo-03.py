estudantes_recuperacao = []
with open("estudantes-notas.txt", mode='r') as file2:
    for linha in file2:
        estudante = linha
        estudante = estudante.split(" ")
        if int(estudante[1]) < 6:
            estudantes_recuperacao.append(estudante[0] + "\n")

with open('estudantes-recuperacao.txt', mode='w') as estudantes_rec_file:
    print(estudantes_recuperacao)
    estudantes_rec_file.writelines(estudantes_recuperacao)
