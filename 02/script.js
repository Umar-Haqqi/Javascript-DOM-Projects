const form = document.querySelector('form');

// by this use case will give an empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid number ${height}`
        // result.innerHTML = `${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid number ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);  // BMI formula
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`  // display in result

        const msg = document.querySelector('#msg')
        // console.log(msg);
        if (bmi < 18.6) {
            msg.innerHTML = "under weight"
        } else if (bmi > 18.6 && bmi < 24.9) {
            msg.innerHTML = "normal range"
        }
        else if (bmi > 24.9) {
            msg.innerHTML = "Overweight"
        }
    }
})