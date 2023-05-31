# 1: Create a function that, given a list of integers, returns the
# highest product between three of those numbers. For example,
# given the list [1, 10, 2, 6, 5, -12, -8] the highest product
# would be 10 * 6 * 5 = 300

#Naive Solution Using sorted()
def highest_product(list):
	#list2=sorted(list, reverse=True) Even increases Time Complexity further to O(n * n) ~ O(n^2) Quadratic
	list2=sorted(list)
	a=list2[0]*list2[1]*list2[-1]
	b=list2[-1]*list2[-2]*list2[-3]
	print(a, b)
	return max(a, b)

# Time Complexity ==> O(nlogn)
# Space Complexity ==> O(n)

#Better Solution Using Single Scan Approach
def highest_product2(list):
	min1 = list[0] 
	min2 = list[0] 
	max1 = list[0] 
	max2 = list[0] 
	max3 = list[0]
	for num in list:
		if (num > max1):
			max3 = max2
			max2 = max1
			max1 = num
		elif (num > max2 and num < max1):
			max3 = max2
			max2 = num
		elif( num > max3 and num < max2):
			max3 = num

		if (num < min1):
			min2 = min1
			min1 = num
		elif (num < min2 and num > min1):
			min2 = num
	return max(min1 * min2 * max1, max1 * max2 * max3)

# Time Complexity ==> O(n) Linear
# Space Complexity ==> O(1)

my_list= [1, 10, 2, 6, 5, 3, -12, -8]
print(highest_product(my_list))
print(highest_product2(my_list))



