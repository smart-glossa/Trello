function homepage()
{
	function main();
	function register();

}
function main(){
	//hole division 
	var maindiv=document.createElement("div");
	document.body.appendChild(maindiv);


	//header division
	var head=document.createElement("div");
	head.setAttribute("class","head");
	maindiv.appendChild(head);

	//create the list
	var ul=document.createElement("ul");
	var li=document.createElement("li");
	var anchor=document.createElement("a");
	anchor.setAttribute("href","");
	var text=document.createTextNode("SignUp");
	anchor.appendChild(text);
	li.appendChild(anchor);
	ul.appendChild(li);
	li.setAttribute("class","list");
	head.appendChild(ul);

	var li1=document.createElement("li");
	var text1=document.createTextNode("Login");
	li1.appendChild(text1);
	li1.setAttribute("class","list1");
	ul.appendChild(li1);

	var li3=document.createElement("li");
	var liimg=document.createElement("img");
	liimg.setAttribute("src","images/2.jpg");
	liimg.setAttribute("class","list3");
	li3.appendChild(liimg);
	ul.appendChild(li3);


	//create main  body division//

	var bodydiv=document.createElement("div");
	bodydiv.setAttribute("class","bod");

var contentdiv=document.createElement("div");
contentdiv.setAttribute("class","content");
var p=document.createElement("p");
var text2=document.createTextNode("Welcome back to Trello!");
p.appendChild(text2);
contentdiv.appendChild(p);
bodydiv.appendChild(contentdiv);
maindiv.appendChild(bodydiv);

var tablediv=document.createElement("div");
var table=document.createElement("table");
var tr=document.createElement("tr");
var td=document.createElement("td");
var email=document.createTextNode("Email ");
td.appendChild(email);

var span=document.createElement("span");
var username=document.createTextNode("(or UserName)");
span.appendChild(username);
span.setAttribute("class","span");
td.appendChild(span);
tr.appendChild(td);
table.appendChild(tr);
tablediv.appendChild(table);
bodydiv.appendChild(tablediv);


var tr1=document.createElement("tr");
var td1=document.createElement("td");
var textbox=document.createElement("input");
textbox.setAttribute("class","inp");
textbox.setAttribute("placeholder","e.g.,spaceman.spiff@gross.club");
td1.appendChild(textbox);
tr1.appendChild(td1);
table.appendChild(tr1);

var tr2=document.createElement("tr");
var td2=document.createElement("td");
var pass=document.createTextNode("Password");
td2.appendChild(pass);
tr2.appendChild(td2);
table.appendChild(tr2);

var tr3=document.createElement("tr");
var td3=document.createElement("td");
var textbox1=document.createElement("input");
textbox1.setAttribute("class","inp");
textbox1.setAttribute("placeholder","e.g .......")
td3.appendChild(textbox1);
tr3.appendChild(td3);
table.appendChild(tr3);

var butdiv1=document.createElement("div");
butdiv1.setAttribute("class","but1");
var butt=document.createElement("button");
var texbut=document.createTextNode("Log in");
butt.appendChild(texbut);
butt.setAttribute("class","butstyle")
butdiv1.appendChild(butt);
bodydiv.appendChild(butdiv1);


} 
//register function   
function register(){
var holediv=document.createElement("div");
bodydiv.appendChild(holediv);

var titlediv=document.createElement("div");
var p2=document.createElement("p");
var textnode=document.createElement("Create a Trello Account");
p2.setAttribute("class","title");
p2.appendChild(textnode);
titlediv.appendChild(p2);
holediv.appendChild(titlediv);

}

//this last function is register but function register does not call so i write the coding in registration.js  