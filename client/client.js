const btn1 = document.querySelector('goingBtn')
const btn2 = document.querySelector('notGoingBtn')

const alertMe1 = () =>{
    alert(`LET'S DO THIS!!!!`)
}
btn1.addEventListener(`click`, alertMe1);

const alertMe2 = () =>{
    alert(`BUMMER YO`)
}
btn2.addEventListener('click', alertMe2);