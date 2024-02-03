let userscore=0;
let compscore=0;
let choises=document.querySelectorAll(".choise");
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
        console.log("No winner ");
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
        showingWinner(userwin);
    }
};

const showingWinner=(userwin)=> {
    if (userwin) {
        console.log("You won ");
    }
    else {
        console.log("You lost ");
    }
}