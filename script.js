let textInput = document.getElementById('text');
let delayInput = document.getElementById('delay');
let outputDiv = document.getElementById('output');
let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let data = textInput.value;
    let delayTime = delayInput.value;

	outputDiv.innerHTML = ` `;
    
    setTimeout(() => {
        outputDiv.innerHTML = data;
    }, delayTime * 1000);
});



