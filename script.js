const burgerTypeDropdown = document.querySelector("#burger-type");
const toppingsCheckboxes = document.querySelectorAll('input[name="topping"]');
const characterDropdown = document.querySelector("#character");
const burgerTypeSummary = document.querySelector("#burger-type-summary");
const toppingsSummary = document.querySelector("#toppings-summary");
const characterSummary = document.querySelector("#character-summary");
const burgerImage = document.querySelector("#burger-image");
const characterImage = document.querySelector("#character-image");

// Populate character dropdown using Bob's Burgers API
fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((character) => {
      const option = document.createElement("option");
      option.text = character.name;
      option.value = character.id;
      characterDropdown.add(option);
    });
  })
  .catch((error) => console.log(error));

// Listen for form submission
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get selected burger type
  const burgerType = burgerTypeDropdown.value;

  // Get selected toppings
  const toppings = [];
  toppingsCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      toppings.push(checkbox.value);
    }
  });

  // Get selected character
  const characterId = characterDropdown.value;
  const characterName = characterDropdown.options[characterDropdown.selectedIndex].text;

  // Update order summary
  burgerTypeSummary.innerText = `Burger Type: ${burgerType}`;
  toppingsSummary.innerText = `Toppings: ${toppings.join(", ")}`;
  characterSummary.innerText = `Favorite Character: ${characterName}`;

  // Update images
  const burgerImageUrl = `https://dummyimage.com/200x200/333333/ffffff&text=${burgerType}`;
  burgerImage.src = burgerImageUrl;
  const characterImageUrl = `https://bobsburgers-api.herokuapp.com/images/medium/${characterId}.jpg`;
  characterImage.src = characterImageUrl;
});
 //how to center a container?
 