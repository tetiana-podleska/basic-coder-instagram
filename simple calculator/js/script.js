function val(result) {
    form.disp.value = form.disp.value + result;
}

function cal() {
    if(form.disp.value == "") {
        alert ("please enter numbers")
    } else {
        form.disp.value = eval(form.disp.value);
    }
}

let btn = form.equal;
btn.addEventListener('onclick', function() {
    form.disp.value = "";
});