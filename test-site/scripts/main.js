var myhead = document.querySelector('h1');
myhead.textContent = 'Hello World!';

var str1 = 'welcome';
var str2 = 'welcome';

if(!(str1 !== str2))
	document.querySelector('#checkvar').textContent='True';

var imgselector = document.querySelector('img');
imgselector.onclick = function(){
	var srcattr = imgselector.getAttribute('src');
	if(srcattr === 'images/googlelogo.jpg')
		imgselector.setAttribute('src','images/baidulogo.jpg');
	else if(srcattr === 'images/baidulogo.jpg')
		imgselector.setAttribute('src','images/googlelogo.jpg');
}

var mybutton = document.querySelector('button');
function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myhead.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myhead.textContent = 'Mozilla is cool, ' + storedName;
}

mybutton.onclick = function(){
	setUserName();
}

