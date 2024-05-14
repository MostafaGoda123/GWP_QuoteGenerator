let apiURL = 'https://api.quotable.io/random'

let btnNewQoute = document.getElementById("btnNewQoute");
let qouteAuthor = document.getElementById("qouteAuthor");
let quote = document.getElementById("quote");
let btnTwitter = document.getElementById("btnTwitter");

async function getQoute() {
   const res = await fetch(apiURL) ;
   let data = await res.json();
   quote.innerHTML = data.content
   qouteAuthor.innerHTML = data.author
}
getQoute()
btnNewQoute.addEventListener("click" ,  ()=>getQoute())
btnTwitter.addEventListener("click" ,  ()=>{
   window.open("https://twitter.com/intent/tweet/?text=" + quote.innerHTML + '--- by' + qouteAuthor.innerHTML , "Tweet Window" , "width=600 , height = 300")
})
