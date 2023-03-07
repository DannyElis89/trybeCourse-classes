def is_anagram(first_string, second_string):
    first_word = list(first_string.lower())
    second_word = list(second_string.lower())

    string_first = "".join(merge_sort(first_word))
    string_second = "".join(merge_sort(second_word))

    if first_string == "" and second_string == "":
        anagram = False
    else:
        anagram = string_first == string_second
    return (string_first, string_second, anagram)


def merge(left, right, string):
    left_letter, right_letter = 0, 0

    while left_letter < len(left) and right_letter < len(right):
        if left[left_letter] <= right[right_letter]:
            string[left_letter + right_letter] = left[left_letter]
            left_letter += 1
        else:
            string[left_letter + right_letter] = right[right_letter]
            right_letter += 1

    for left_letter in range(left_letter, len(left)):
        string[left_letter + right_letter] = left[left_letter]

    for right_letter in range(right_letter, len(right)):
        string[left_letter + right_letter] = right[right_letter]

    return string


def merge_sort(string):
    if len(string) <= 1:
        return string
    mid = len(string) // 2

    left = merge_sort(string[:mid])
    right = merge_sort(string[mid:])

    return merge(left, right, string.copy())
