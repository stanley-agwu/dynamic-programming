# Create a function that, given a list of words, returns the first
# three longest word in the list. For example, given the
# list ["wedding", "bridge", "sport-car","north", "pig", "television"]
#the function should return "television", "sport-car","wedding".

#Naive Solution Using sorted()
def longest_word(list):
	list2=sorted(list, reverse=True, key=lambda x: len(x))
	# return 'The three longest words are: {}, {}, {}'.format(list2[0], list2[1], list2[2])
	return f"The three longest words are: {list2[0]}, {list2[1]}, {list2[2]}"

# Time Complexity ==> O(n * n)
# Space Complexity ==> O(n)

#Best Solution Using Scan once
def longest_word2(list):
	first_longest = ""
	second_longest = ""
	third_longest = ""

	for word in list:
		if (len(word) > len(first_longest)):
			third_longest = second_longest
			second_longest = first_longest
			first_longest = word
		elif (len(word) > len(second_longest) and len(word) <= len(first_longest)):
			third_longest = second_longest
			second_longest = word
		elif (len(word) > len(third_longest) and len(word) <= len(second_longest)):
			third_longest = word
	return 'The three longest words are: {}, {}, {}'.format(first_longest, second_longest, third_longest) 

# Time Complexity ==> O(n) Linear
# Space Complexity ==> O(1)

#Good Solution Using a Dictionary (Hash Table)
def longest_word3(list):
	N = len(list)

	wordDict = {}
	for word in list:
		wordDict[word] = len(word)

	firstLongest = ""
	secondLongest = ""
	thirdLongest = ""
	
	for key in wordDict:
		if (wordDict[key] > len(firstLongest)):
			thirdLongest = secondLongest
			secondLongest = firstLongest
			firstLongest = key
		elif (wordDict[key] > len(secondLongest) and wordDict[key] <= len(firstLongest)):
			thirdLongest = secondLongest
			secondLongest = key
		elif (wordDict[key] > len(thirdLongest) and wordDict[key] <= len(secondLongest)):
			thirdLongest = key
	return 'The three longest words are: {}, {}, {}'.format(firstLongest, secondLongest, thirdLongest) 
# Time Complexity ==> O(n) Linear
# Space Complexity ==> O(n) Linear



word_list= ["television", "sport-cars", "wedding", "bridge", "north", "pig"]
word_list2= ["wedding", "bridge", "north", "North-Pole", "pig", "television", "sport-car", "stockbroker"]
print(longest_word(word_list))
print(longest_word2(word_list))
print(longest_word(word_list2))
print(longest_word2(word_list2))
print(longest_word3(word_list))
print(longest_word3(word_list2))
