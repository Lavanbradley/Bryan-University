class MyClass():
  def method1(self):
    print("Guru99")
  def method2(self,someString):
    print("Software Testing: " + someString)


def main():
  c = MyClass()
  c.method1()
  c.method2("Testing is fun")


if __name__ == "__main__":
  main()