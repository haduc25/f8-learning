function copyNow(valueOfThisFromDOM) {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = valueOfThisFromDOM.textContent
    inp.select();
    document.execCommand('copy', false);
    inp.remove();

    // alert("Copied" + inp.value);
 }