// Bob's Burgers API URL
const API_URL = "https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=32";

// Function to fetch burger order data from API and display result
function orderBurger() {
    const burgerType = document.getElementById("burger-type").value;
    const topping1 = document.getElementById("topping1").value;
    const topping2 = document.getElementById("topping2").value;
    const topping3 = document.getElementById("topping3").value;

    // Fetch data from API
    $.getJSON(API_URL, function(data) {
        console.log(data)
        const burgerName = data[Math.floor(Math.random() * data.length)].name;
        const burgerDescription = `A delicious ${burgerType} burger with ${topping1}, ${topping2}, and ${topping3}.`;
        const result = `Your order is ready! You ordered the ${burgerName} burger: ${burgerDescription}`;
        document.getElementById("burger-result").innerHTML = result;
        document.getElementById("burger-image").src = `https://bobsburgers-api.herokuapp.com/images/characters/${36}.jpg`;
        document.getElementById("burger-image").alt = burgerName;

        const charactersDiv = document.getElementById('characters')

        data.forEach((character) => {
            const characterImage = document.createElement('img')
            characterImage.src = character.image

            const nameParagraph = document.createElement('p');
            nameParagraph.innerText = character.name

            charactersDiv.append(characterImage, nameParagraph)
        })
    });
}

// Speech recognition function to order burger with voice commands
if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;
    document.querySelector('button').addEventListener('click', () => {
        recognition.start();
    });
    recognition.addEventListener('result', (e) => {
        let last = e.results.length - 1;
        const burgerType = e.results[last][0].transcript;
        const topping1 = e.results[last][1].transcript;
        const topping2 = e.results[last][2].transcript;
        const topping3 = e.results[last][3].transcript;
        const burgerDescription = `A delicious ${burgerType} burger with ${topping1}, ${topping2}, and ${topping3}.`;
        // Fetch data from API
        $.getJSON(API_URL, function(data) {
            const burgerName = data[Math.floor(Math.random() * data.length)].name;
            const result = `Your order is ready! You ordered the ${burgerName} burger: ${burgerDescription}`;
            document.getElementById("burger-result").innerHTML = result;
            document.getElementById("burger-image").src = `https://bobsburgers-api.herokuapp.com/images/${burgerName}.jpg`;
            document.getElementById("burger-image").alt = burgerName;
        });
    });
} else {
    document.getElementById("burger-result").innerHTML = "Sorry, speech recognition is not supported by your browser.";
}
