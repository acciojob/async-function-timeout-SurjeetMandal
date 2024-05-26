async function displayMessage() {
    const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;
    const outputDiv = document.getElementById('output');

	outputDiv.innerText = ` `;
    
    const delayMilliseconds = delayInput * 1000;
    
    await new Promise(resolve => setTimeout(() => {
		outputDiv.innerText = textInput;
	}, delayMilliseconds));
}

document.getElementById('btn').addEventListener('click', displayMessage);



