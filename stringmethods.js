document.write("----STRING METHODS: --------<br><br>")

// Length of a string
var str = "Hello World"
var a = str.length;
document.write("Length of a string: "+ a)

//Lowercase
var str1 = "Laiba Hamid"
var b = str1.toLowerCase();
document.write("<br>Lowercase method: "+b)

//Uppercase
var str1 = "Laiba Hamid"
var b = str1.toUpperCase();
document.write("<br>Uppercase method: "+b)

//Include: Returns true if the string matches the search otherwise false; casesensitive
var str2 = "Javascript is a great language"
var c = str2.includes("great")
document.write("<br>Include matches: "+c)

//startsWith: finds the first word of string
var str3 = "Javascript is a great language"
var d = str3.startsWith("Javascript")
document.write("<br>Starts with matches: "+d)

//endsWith: finds the last word of string
var str4 = "Javascript is a great language"
var e = str4.endsWith("language")
document.write("<br>Ends with matches: "+e)

//search: finds the index of that word in the string
var str5 = "Javascript is a great language"
var f = str5.search("is")
document.write("<br>Search matches at index: "+f)

//MATCH: finds the words in the whole string and prints 
var str6 = "Javascript is a great language"
var g = str6.match(/is/g)
document.write("<br>Search matches: "+g) 

//indexOf: finds the index from the begining
var str7 = "Javascript is a great language"
var h = str7.indexOf("great")
document.write("<br>Index at: "+h) 

//lastIndexOf: finds the index from the end
var str8 = "Javascript is a great is a language"
var i = str8.lastIndexOf("is")
document.write("<br>Last Index at: "+i) 

//replace: relaces existing value 
var str9 = "Javascript is great language"
var j = str9.replace("Javascript", "PHP") //PHP replaces Javasript
document.write("<br>After replacement: "+j) 

//trim:trims extra spaces in the string and works in alert
var str10 = "          Javascript       "
var k = str10.trim()
alert(k) 

//charAt: tells where the character is
var str11 = "Javascript is great language"
var l = str11.charAt(5)
document.write("<br>Character at index 5 is: "+l) 

//charcodeAt: tells where the character code is from ASCII table
var str12 = "Javascript is great language"
var m = str12.charCodeAt(5)
document.write("<br>Character code is at: "+m) 

//fromCharCode: tells the character from ASCII code table
var n = String.fromCharCode(110)
document.write("<br>The character from ASCII code table at 110 is: "+n) 

//concat: merges two or more than two strings
var stra = "Hello "
var strb = "World"
var o = stra.concat(strb)
document.write("<br>After concatination: "+o)

//split: splits characters and creates separate array for each one of them
var str13 = "Javascript is a great language"
var p = str13.split(" ") //removed spaces between the words
document.write("<br>After split: "+p)

//repeat: repeats the whole string how many times the num is entered
var str14 = "Javascript is a great language "
var q = str14.repeat(3)
document.write("<br>After repetition: "+q)

//slice: prints the string from th first index till last  & substr does the same 
var str15 = "Javascript is a great language "
var r = str15.slice(5,15)
document.write("<br>After split: "+r)

//substring: will not count the 2nd parameter and prints befor it
var str16 = "Javascript is a great language "
var s = str16.substring(5,10)  //starts from 5th index and prints till 9th char
document.write("<br>Substring: "+s)

//toString: converts the datatype to string, either if its numeric or char
var str17 = 50;
var t = str17.toString()
document.write(a + 20)

//valueOf: prints string as it is
var str18 = "Javascript is a great language ";
var u = str18.valueOf()
document.write("<br>Value of: "+u)





