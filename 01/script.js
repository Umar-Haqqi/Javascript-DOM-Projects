const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
console.log(buttons);

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e.target.id);

        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
        }
    })
})