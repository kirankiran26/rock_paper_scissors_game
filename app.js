let userscore=0;
let compscore=0;
let choises=document.querySelectorAll(".choise");
let msg=document.querySelector(".message");
let msgbar=document.querySelector(".message-bar");
userscoreblock=document.querySelector("#userscoreid");
compscoreblock=document.querySelector("#compscoreid");
console.log(msg);
choises.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        userchoise=choise.getAttribute("ID");
        actuallgame(userchoise);
    })
})
const compluterchoise=()=> {
    let options=["paper","rock","scissor"];
    let ran=Math.floor(Math.random()*3);
    return options[ran]
}
const actuallgame=(userchoise)=> {
    console.log("User choise ",userchoise);
    let compluterchoiseop=compluterchoise();
    console.log("Compluter choise ", compluterchoiseop);
    chequingTheWinner(userchoise, compluterchoiseop);
}
const chequingTheWinner = (userchoise, compluterchoiseop) => {
    if (userchoise === compluterchoiseop) {
        msg.innerText="No Winner "
        msgbar.style.backgroundColor="#081b31";
        
    } else {
        let userwin = true;
        if (userchoise === "rock") {
            //paper or scissor 
            userwin = compluterchoiseop === "paper" ? false : true;
        } else if (userchoise === "paper") {
            userwin = compluterchoiseop === "scissor" ? false : true;
        } else {
            //scissor
            userwin = compluterchoiseop === "rock" ? false : true;
        }
        showingWinner(userwin ,userchoise,compluterchoiseop);
    }
};

const showingWinner=(userwin,userchoise,compluterchoiseop)=> {
    if (userwin) {
       userscore++;
       userscoreblock.innerText=userscore
       msg.innerText=`You win! Your ${userchoise} beats ${compluterchoiseop}`;
       msgbar.style.backgroundColor="blue"
    }
    else {
        compscore++;
        compscoreblock.innerText=compscore;
        msg.innerText=`You lost! ${compluterchoiseop} beats your ${userchoise}`;
        msgbar.style.backgroundColor="red"
    }
}