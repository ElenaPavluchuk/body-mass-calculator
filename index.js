function handleChangeWeight(event) {
    const weight = event.target.value;
    const weightInput = document.getElementById("weight-input");
    weightInput.setAttribute("value", weight);
};

function handleChangeHeight(event) {
    const height = event.target.value;
    const heightInput = document.getElementById("height-input");
    heightInput.setAttribute("value", height);
};

function handleClick() {
    const weightInput = document.getElementById("weight-input");
    const weightElement = weightInput.value;
    const heightInput = document.getElementById("height-input");
    const heightElement = heightInput.value**2;
    const resultElement = weightElement / heightElement;
    console.log(resultElement);
    const result = document.getElementById("result");
    result.classList.remove("hidden");
    result.innerText = `BMI is: ${Math.round(resultElement)}`;
};
