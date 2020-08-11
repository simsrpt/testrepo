let newbtn = document.querySelector("newbtn");

var quote = [
   'hiiiii',
   'hellloo',
   'howw are u',
   'byeee'

]

function generate(){
	var randomQuote=[Math.floor(Math.random()*quote.length)]

document.getElementById('quotedisplay').innerText = quote [randomQuote];
}