def print_word(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end='')
        print()


if __name__ == "__main__":
    name = input("Digite um nome: ")
    print_word(name)
