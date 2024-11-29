def find_longest_word(line: str):
    words = line.split()
    longest_word = words[0]
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word


text = "hello world jdaoifdjofaif"
print(find_longest_word(text))

