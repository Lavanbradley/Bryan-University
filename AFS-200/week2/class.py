class myClass():
  def method1(self):
    userInput = input("What is your name? ")
    print(userInput.upper())

def main():
  c = myClass()
  c.method1()

if __name__ == "__main__":
  main()