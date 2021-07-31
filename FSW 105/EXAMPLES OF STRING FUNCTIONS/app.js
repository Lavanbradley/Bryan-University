//.indexOf()
var st = "Please only find where only occurs!";
var po = st.indexOf("only");
console.log(po);
//The first occurence of only is at index 7

//.lastIndexOf
var id = "Rocks are cool, big rocks suck and small rocks rule!";
var di = id.lastIndexOf("rocks");
console.log(di);
//The last occurence of rocks is at index 41

//.search()
var sr = "Apples are green, some are red.";
var rs = sr.search("red");
console.log(rs);
//Looked for red, red starts at index 27

//.slice()
var string = "Mango, apple, kiwi";
var r = string.slice(7, 12);
console.log(r);
// Apple starts at index 7 and ends at 12 slice() sliced it

//.substring()
var p = "Apple, banana, kiwi";
var pp = p.substring(7, 13);
console.log(pp);
//Banana starts at 7 and ends at 13

//.substr()
var tt = "Apple, kiwi, pie";
var ttt = tt.substr(7, 5);
console.log(ttt);
//Its the same as slice but the first number tell what index to start at and the second just tells how many characters to count from there kiwi starts at 7 5 characters later it stops at ,

//.replace(x,y)
var bees = "Please come over";
var flower = bees.replace("over", "home!");
console.log(flower);
//The first perameter selects the word in the string you'd like to replace and the second peremeter is the word that will replace it 

//.charAt()
var learn = "WORLD";
var dumb = learn.charAt(3);
console.log(dumb);
//L is at index of 3

//.charCodeAt()
var what = "Halloween";
var chill = what.charCodeAt(0);
console.log(chill);
//Returns the unicode value of H which is 72, each charater has a inicode value

//.toLowerCase you already know
//.toUpperCase you already know

//.concar(v1, v2, ...)
var t1 = "Hi";
var t2 = "What's up!";
var t3 = t1.concat(" ", t2);
console.log(t3);
// Concatenate's strings. The " " just adds a spce between Hi and What's

//.trim
var white = "       Whoa baby         ";
var black = white.trim();
console.log(black);
//Removes whitspace

//.split(delimiter)
var message = "Welcome to hell!";
var words = message.split(0);
console.log(message);
//Didnt work do more reasearch

//endsWith()
var aa = "Hello guys";
var bba = aa.endsWith("guys");
console.log(bba);
//Reads back true because it is
//.startsWith()does the opposite

//.toString()
var str1 = "Hello";
var str2 = str1.toString();
console.log(str2);
//Returns the string object value

//.length()
var last = "Hell no";
var time = last.length;
console.log(time);
//Count the length of the string