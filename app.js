let userscore=0;
let compscore=0;
let choises=document.querySelectorAll(".choise");
let msg=document.querySelector(".message");
let msgbar=document.querySelector(".message-bar");
let userscoreblock=document.querySelector("#userscoreid");
let compscoreblock=document.querySelector("#compscoreid");
let leadintlagingbt=document.querySelector(".leadintlaging");
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
    let compluterchoiseop=compluterchoise();
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
    leadingorlaggingmsg(userscore,compscore);
}
const leadingorlaggingmsg =(userscore,compscore)=> {
    
    if (userscore===compscore) {
        leadintlagingbt.style.backgroundColor="lightgrey"
        leadintlagingbt.innerText="Draw"
        leadintlagingbt.classList.remove("hide")

    }
    else if(userscore>compscore) {
        leadintlagingbt.innerText="Your are leading "
        leadintlagingbt.classList.remove("hide")
        leadintlagingbt.style.backgroundColor="aqua"
    }
    else {
        leadintlagingbt.style.backgroundColor="red"
        leadintlagingbt.innerText="Compluter is leading "
        leadintlagingbt.classList.remove("hide")
    }
    
}