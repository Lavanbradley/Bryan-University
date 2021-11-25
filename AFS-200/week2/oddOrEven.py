print("Question 1")

num = int(input("Enter a number: "))

if(num % 2) == 0:
  print(str(num) + " is even")
else:
  print(str(num) + " is odd")

print("Extra credit 1")

num = int(input("Enter a number "))

if(num % 4) == 0:
  print(str(num) + " is divisible by 4")
else:
  print(str(num) + " is not divisible by 4")


print("Extra credit 2")

num = int(input("Enter a number: "))
check = int(input("Enter another number: "))

if(num % check) == 0:
  print(str(check) + " Divides evenly into " + str(num))
else:
  print(str(check) + " Does not divide evenly " + str(num))