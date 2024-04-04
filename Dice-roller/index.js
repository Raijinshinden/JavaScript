

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const diceSum = document.getElementById("diceSum");
    const values = [];
    const images = [];
    let sum = 0;

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice-${value}.png">`)
    }

    for(let i = 0; i < values.length; i++){
        sum += values[i];
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('')
    diceSum.textContent = `Total Sum: ${sum}`;
}