const loadQuotes = ()=>{
    const URL =`https://api.adviceslip.com/advice`
    fetch(URL).then(res=>res.json())
    .then(data=>showQuotes(data.slip));
}

const showQuotes=(quotes)=>{
    console.log(quotes)
const displayQuote = document.getElementById("display-quote");
// quotes.forEach((quote)=>{
//     console.log(quote)
//     const div=document.createElement("div");
//     div.innerHTML=`
//   <p>hi</p>
//     `
//     displayQuote.appendChild(div);
// })
displayQuote.innerHTML=`
<h2 class="text-4xl font-bold text-purple-800 mb-8">Advice #${quotes.id}</h2>
<p class="text-3xl text-stone-500 font-semibold"> ${quotes.advice}</p>
`
}

loadQuotes();