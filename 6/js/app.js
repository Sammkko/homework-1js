// function makeArmy() {

//     let shooters = [];
  
//     for (let i = 0; i < 10; i++) {
//       shooters.push(function() {
//         alert( i ); 
//       });
//     }
  
//     return shooters;
//   }
  
//   let army = makeArmy();
  
//   army[1](); 
//   army[7]();


const text = document.querySelector('.text');
const title = document.querySelector('.title');

text.onmouseenter = () => {
    text.setAttribute('class', 'title');
}

text.onmouseleave = () =>{
    text.classList.remove('title');
    text.setAttribute('class', 'text');
}


