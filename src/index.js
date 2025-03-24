// Your code here
//Character names.
const char = document.getElementById("character-bar");
const details = document.getElementById("detailed-info");
const Name = document.getElementById("name");
const Mymage = document.getElementById("image")
const form = document.getElementById("votes-form");
const button = document.getElementById("reset-btn");
const votes = document.getElementById("vote-count")

let currChar = null;

fetch('http://localhost:3000/characters')
.then((resp)=>resp.json())
.then(data=>{
    console.log(data);

    data.forEach(details => {
        const span = document.createElement('span');
        span.innerText=details.name;

        char.appendChild(span);

        span.addEventListener("click",(e)=>{
            e.preventDefault();

            currChar = details;

            Name.innerText=details.name;
            Mymage.src=details.image;
            votes.innerText=details.votes
            
        })

    })
    
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
if(!currChar){
    alert("Pick a valid Character!!");
    return;
}
    const input = document.getElementById("votes");
    const newVotes = parseInt(input.value)
    
    if(isNaN(newVotes)){
        alert("Enter a valid number");
        return;
    }

    currChar.votes = (currChar.votes || 0)+newVotes;
    votes.innerText = currChar.votes; 

    input.value = "";

})
button.addEventListener('click',()=>{

if(!currChar){
    alert("Please select the character first!");
    return;
}
    currChar.votes=0;
    votes.innerText=currChar.votes
})
