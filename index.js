alert("Welcome Player-1");
var player1=prompt("Enter Your Name");
alert("Welcome Player-2");
var player2=prompt("Enter Your Name");
var response=prompt("Alright! "+player1+" and "+player2+" Are You Ready !!?");

alert(player1+" -> X     "+player2+"  -> O ");

// for(var i=1;i<=8;i++){ //for this player and that player response
//     if(i%2==1){
//         const Select1 = document.querySelectorAll('.box');
//         for(let j=0 ; j<4 ; j++){
//             Select1[j].addEventListener('click',function (){
//                 // if( Select1.style.backgroundColor !=="green" ){
//                 // }
//                 //Select1.style.backgroundColor="red";
//                 const select1Id=this.id;
//                 this.style.backgroundColor = 'green';
//             })
//         }
//     }
//     else if(i%2==0){
//         const Select2 = document.querySelectorAll('.box');
//         for(let j=0 ; j<9 ; j++){
//             Select2[j].addEventListener('click',function (){
//                 const select2Id=this.id;
//                 //Select1.style.backgroundColor="red";
//                 this.style.backgroundColor = 'Blue';
                
//             })
//         }
//     }
// }
//clickcount<=maxclick &&
//&& Select1.style.backgroundColor !=="red" && Select1.style.backgroundColor !=="green"

let select=document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
let currentPlayer; 
let prevPlayer;
let running;
    
document.addEventListener('DOMContentLoaded', checkWinner );

function checkWinner(){
    

    currentPlayer = 1; 
    prevPlayer=2;
    running=true;

    boxes.forEach(box => {
        box.addEventListener('click', function() {
            const boxId = this.id;

        if(running===true){

            // Determine current player's color based on currentPlayer value
            if ((currentPlayer === 1)&&(this.style.backgroundColor != 'green')&&(this.style.backgroundColor != 'blue')&&(prevPlayer===2)) {
                this.style.backgroundColor = 'green';
                prevPlayer=1;
            }
             else if ((currentPlayer === 2)&&(this.style.backgroundColor != 'green')&&(this.style.backgroundColor != 'blue')&&(prevPlayer===1))  {
                this.style.backgroundColor = 'blue';
                prevPlayer=2;
            }

            currentPlayer = currentPlayer === 1 ? 2 : 1;

            if((boxes[0].style.backgroundColor=="green" && boxes[1].style.backgroundColor=="green") && boxes[2].style.backgroundColor=="green"){
                select.innerHTML="Player 1 won ";
                running=false;
                
            }
            else if((boxes[0].style.backgroundColor=="blue" && boxes[1].style.backgroundColor=="blue") && boxes[2].style.backgroundColor=="blue"){
                select.innerHTML="Player 2 won ";
                running=false;

            }
            else if((boxes[3].style.backgroundColor=="green" && boxes[4].style.backgroundColor=="green") && boxes[5].style.backgroundColor=="green"){
                select.innerHTML="Player 1 won ";
                running=false;

            }
            else if((boxes[3].style.backgroundColor=="blue" && boxes[4].style.backgroundColor=="blue") && boxes[5].style.backgroundColor=="blue"){
                select.innerHTML="Player 2 won ";
                running=false;

            }
            else if((boxes[6].style.backgroundColor=="green" && boxes[7].style.backgroundColor=="green") && boxes[8].style.backgroundColor=="green"){
                select.innerHTML="Player 1 won ";
                running=false;

            }
            else if((boxes[6].style.backgroundColor=="blue" && boxes[7].style.backgroundColor=="blue") && boxes[8].style.backgroundColor=="blue"){
                select.innerHTML="Player 2 won ";
                running=false;

            }


            else if((boxes[0].style.backgroundColor=="green" && boxes[3].style.backgroundColor=="green") && boxes[6].style.backgroundColor=="green"){
                select.innerHTML="Player 1 won ";
                running=false;

            }
            else if((boxes[0].style.backgroundColor=="blue" && boxes[3].style.backgroundColor=="blue") && boxes[6].style.backgroundColor=="blue"){
                select.innerHTML="Player 2 won ";
                running=false;

            }
            else if((boxes[1].style.backgroundColor=="green" && boxes[4].style.backgroundColor=="green") && boxes[7].style.backgroundColor=="green"){
                select.innerHTML="Player 1 won ";
                running=false;

            }
            else if((boxes[1].style.backgroundColor=="blue" && boxes[4].style.backgroundColor=="blue") && boxes[7].style.backgroundColor=="blue"){
                select.innerHTML="Player 2 won ";
                running=false;

            }
            else if((boxes[2].style.backgroundColor=="green" && boxes[5].style.backgroundColor=="green") && boxes[8].style.backgroundColor=="green"){
                select.innerHTML="Player 1 won ";
                running=false;

            }
            else if((boxes[2].style.backgroundColor=="blue" && boxes[5].style.backgroundColor=="blue") && boxes[8].style.backgroundColor=="blue"){
                select.innerHTML="Player 2 won ";
                running=false;

            }

            else if((boxes[0].style.backgroundColor=="green" && boxes[4].style.backgroundColor=="green") && boxes[8].style.backgroundColor=="green"){
                select.innerHTML="Player 1 won ";
                running=false;

            }
            else if((boxes[0].style.backgroundColor=="blue" && boxes[4].style.backgroundColor=="blue") && boxes[8].style.backgroundColor=="blue"){
                select.innerHTML="Player 2 won ";
                running=false;

            }
            else if((boxes[2].style.backgroundColor=="green" && boxes[4].style.backgroundColor=="green") && boxes[6].style.backgroundColor=="green"){
                select.innerHTML="Player 1 won ";
                running=false;

            }
            else if((boxes[2].style.backgroundColor=="blue" && boxes[4].style.backgroundColor=="blue") && boxes[6].style.backgroundColor=="blue"){
                select.innerHTML="Player 2 won ";
                running=false;

            }
        }
            
        });
    });
}

let reseting=document.querySelector('#Reset');
let newgame=document.querySelector('#New');

reseting.addEventListener('click',function(){
    currentPlayer = 1; 
    prevPlayer=2;
    running=true;
    for(box of boxes){
        box.style.backgroundColor="yellow";
    }
    select.innerHTML="Welcome to Tic-Tac-Toe";
    checkWinner();
})

newgame.addEventListener('click',function(){
    currentPlayer = 1; 
    prevPlayer=2;
    running=true;
    for(box of boxes){
        box.style.backgroundColor="yellow";
    }
    select.innerHTML="Welcome to Tic-Tac-Toe";
    checkWinner();
})
