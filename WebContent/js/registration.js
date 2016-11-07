function register()
{
	//register pAGE//
	var holediv=document.createElement("div");
	document.body.appendChild(holediv);


	var titlediv=document.createElement("div");
	var p3=document.createElement("p");
	var texnode=document.createTextNode("Create a Trello Account");
	p3.appendChild(texnode);
	p3.setAttribute("class","title");
	titlediv.appendChild(p3);
	holediv.appendChild(titlediv);

//textbox//div

var textboxdiv=document.createElement("div");
var table1=document.createElement("table");
var trr=document.createElement("tr");
var tdd=document.createElement("td");
var texts=document.createTextNode("Name");

tdd.setAttribute("class","tdd");
tdd.appendChild(texts);
trr.appendChild(tdd);
table1.appendChild(trr);
textboxdiv.appendChild(table1);
holediv.appendChild(textboxdiv);

var trr1=document.createElement("tr");
var tdd1=document.createElement("td");
var inpu=document.createElement("input");
inpu.setAttribute("id","fullName");
inpu.setAttribute("class","in");
inpu.setAttribute("placeholder","e.g,calvin");
tdd1.appendChild(inpu);
trr1.appendChild(tdd1);
table1.appendChild(trr1);

var trr2=document.createElement("tr");
var tdd2=document.createElement("td");
var texs1=document.createTextNode("UserName");
tdd2.appendChild(texs1);
trr2.appendChild(tdd2);
table1.appendChild(trr2);
tdd2.setAttribute("class","tdd");

var trr3=document.createElement("tr");
var tdd3=document.createElement("td");
var input=document.createElement("input");
input.setAttribute("class","in");
input.setAttribute("id","UserName");
input.setAttribute("placeholder","e.g,Spaceman.spiff@gross.club");
tdd3.appendChild(input);
trr3.appendChild(tdd3);
table1.appendChild(trr3);

var trr4=document.createElement("tr");
var tdd4=document.createElement("td");
var texs2=document.createTextNode("Password");
tdd4.appendChild(texs2);
tdd4.setAttribute("class","tdd");
trr4.appendChild(tdd4);
table1.appendChild(trr4);

var trr5=document.createElement("tr");
var tdd5=document.createElement("td");
var input1=document.createElement("input");
input1.setAttribute("class","in");
input1.setAttribute("id","Password");
input1.setAttribute("placeholder","e.g,......");
tdd5.appendChild(input1);
trr5.appendChild(tdd5);
table1.appendChild(trr5);

//create the checjbox//

var adddiv=document.createElement("div");
adddiv.setAttribute("class","add");
var x=document.createElement("input");
x.setAttribute("type","checkbox");
adddiv.appendChild(x);
holediv.appendChild(adddiv);


var span1=document.createElement("span");
span1.setAttribute("class","span1");
var textt=document.createTextNode("I accept the");
span1.appendChild(textt);
adddiv.appendChild(span1);

var span2=document.createElement("span");
var anc=document.createElement("a");
var textt1=document.createTextNode("Trems of Service");
anc.appendChild(textt1);
anc.setAttribute("href","");
anc.setAttribute("class","spana");
span2.appendChild(anc);
adddiv.appendChild(span2);

var span3=document.createElement("span");
var te=document.createTextNode("  and");
span3.appendChild(te);
span3.setAttribute("class","span3");
adddiv.appendChild(span3);


var span4=document.createElement("span");
var anc1=document.createElement("a");
var tee=document.createTextNode("  Privacy Policy");
anc1.appendChild(tee);
anc1.setAttribute("href","");
anc1.setAttribute("class","spana1");
span4.appendChild(anc1);
adddiv.appendChild(span4);


buttondiv=document.createElement("div");
buttondiv.setAttribute("class","bu");
var buttt=document.createElement("button");
var textbut=document.createTextNode("Create New Account");
buttt.appendChild(textbut);
buttt.setAttribute("id","buts");
buttondiv.appendChild(buttt);
holediv.appendChild(buttondiv);

var linediv=document.createElement("div");
var line=document.createElement("p");
var linetex=document.createTextNode("Do you have a Google Account?");
line.setAttribute("class","line");
line.appendChild(linetex);
linediv.appendChild(line);
holediv.appendChild(linediv);

var buttondiv1=document.createElement("div");
buttondiv1.setAttribute("class","bu");
var but8=document.createElement("button");
var textbut1=document.createTextNode("Sign up with Goole");
but8.appendChild(textbut1);
buttondiv1.appendChild(but8);
but8.setAttribute("class","but8");
holediv.appendChild(buttondiv1);



var paradiv=document.createElement("p");
var paratext=document.createTextNode("Already have an account? ");
paradiv.appendChild(paratext);
holediv.appendChild(paradiv);
paradiv.setAttribute("class","para");

var login=document.createElement("a");
var logintex=document.createTextNode("Login");
login.setAttribute("href","")
login.appendChild(logintex);
paradiv.appendChild(login);



}