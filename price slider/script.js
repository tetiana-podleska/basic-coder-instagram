/** function to change slider range according to input **/

const rangeInput = document.querySelectorAll('.rangeInput input');

const priceInput = document.querySelectorAll('.priceInput input');

const progress = document.querySelector('.slider .progress');

let priceGap = 1000;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt (priceInput[0].value);
        let maxVal = parseInt(priceInput[1].value);

        if (maxVal - minVal >= priceGap && maxVal <= 10000) {
            if (e.target.className === "inputMin") {
                rangeInput[0].value = maxVal;
                progress.style.left = (minVal/rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = minVal;
                progress.style.right = 100 - (minVal/rangeInput[1].max) * 100 + "%";
            }
        }
    })
})


/** function to change input according to slider range **/

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "rangeMin") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    })
})