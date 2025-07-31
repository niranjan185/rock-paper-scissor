
let userscore = 0;
let compscore = 0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const compchoice = () =>{
    const options =["rock","paper","scissor"]
   const randidx = Math.floor(Math.random()*3);
   return options[randidx];
}
const drawgame =() =>{
    msg.innerText ="game was draw"
    msg.style.backgroundColor = "rgb(11, 8, 47) ";
}
const showwinner = (userwin,userchoice,genchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText =userscore;
        msg.innerText = `you win.your ${userchoice} beats ${genchoice}`
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText =`you lost. ${genchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red";
        
    }
}

const playgame = (userchoice) =>{
    const genchoice=compchoice();
    if(userchoice === genchoice){
       drawgame();
    }else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin = genchoice === "paper" ? false : true; 
        }else if(userchoice === "paper"){
            userwin = genchoice === "scissor" ? false : true;
        }else{
            userwin = genchoice === "rock" ? false : true;

        }showwinner(userwin,userchoice,genchoice);
    }
    

}

choices.forEach((choice) =>{
 choice.addEventListener("click",() =>{
    const userchoice =choice.getAttribute("id");
    playgame(userchoice);
})
}

) 
