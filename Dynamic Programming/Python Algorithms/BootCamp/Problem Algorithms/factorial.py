#  factorial computation


# Iterative method
# Time Complexity => O(n) Space Complexity => O(1)
def factorialI(n):
  fact = 1
  for i in range(2, n + 1):
    fact *= i
  return fact

print(factorialI(5))
print(factorialI(1))

# Recursive method
# Time Complexity => O(n) Space Complexity => O(n)
def factorialR(n):
  if (n == 0): return 1;
  return n * factorialR(n - 1)

print(factorialR(5))
print(factorialR(1))