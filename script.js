async function displayMessage() {
    const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;
    const outputDiv = document.getElementById('output');

	outputDiv.textContent = ` `;
    
    const delayMilliseconds = delayInput * 1000;
    
    await new Promise(resolve => setTimeout(() => {
		outputDiv.textContent = textInput;
	}, delayMilliseconds));
}

document.getElementById('btn').addEventListener('click', displayMessage);



