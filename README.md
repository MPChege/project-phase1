# project-phase1

<h1><b>Table of Content</h1></b>

1. [Bob's Burger](#ExplanationofwhatBosBurger)
2. [Description](#description)
3. [Technologies Used](#technologies-used)
4. [How it works](#how-it-works)
5. [Improvements:](#improvements)
6. [Dependencies](#dependencies)
7. [How to run the application](#how-to-run-the-application)
8. [Usage](#usage)
9. [Contributing](#contributing)
10. [Credits](#credits)
11. [License](#license)


## Bob's Burger
Bob's Burger is an American animated website that is centered on the Belcher family—parents Bob runs a hamburger restaurant.

## Description
The website allows users to order a burger and select their favorite character from the popular animated TV show Bob's Burgers. The user can choose from a list of burger types, select toppings, and choose a character from the API provided. Once the user submits their order, a summary is displayed with their selections and an image of the chosen character.

## Technologies used:

- HTML
- CSS
- JavaScript
- Bob's Burgers API

### How it works:

HTML and CSS are used to create the structure and style of the page, respectively.
JavaScript is used to fetch data from the Bob's Burgers API, dynamically populate the character selection dropdown menu, and handle form submission.
When the page loads, the JavaScript code fetches data from the Bob's Burgers API using the fetch() function. The data is then converted to JSON using the response.json() method.
The code then iterates over the data and creates an option element for each character, with the character's name as both the value and text content. The option elements are appended to the select element with the id "character".
When the user submits the order form, an event listener is triggered. The JavaScript code extracts the user's selections from the form inputs and logs them to the console.
The code then creates a summary of the user's selections and displays it in the "order-summary" container. 

## Improvements:

Error handling could be added to the fetch request to handle any errors that may occur.
The UI could be improved with more styling and layout adjustments.
The code could be refactored to use more functions to make it more modular and easier to read.

## Dependencies
This web page uses HTML, CSS, and JavaScript. It also uses the Bob's Burgers API to fetch character data.

## How to run the application
To use this web page, simply download the code and open the index.html file in your web browser.

## Usage
The web page allows users to order a burger and choose their favorite Bob's Burgers character. The user selects their burger type and any desired toppings using the form inputs. They can then choose their favorite character from a dropdown menu populated with data fetched from the Bob's Burgers API.

Once the user submits their order, the details are printed to the console.

The web page is designed to be responsive and interactive, with hover effects on the character selection dropdown and a button that changes color on hover.

## Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## Credits
This web page was created by <b>MARK PAUL</b> based on a project idea from <b>https://bobs-burgers-api-ui.herokuapp.com/.</b>

The Bob's Burgers API was created by<b> Loren Bouchard</b> and can be accessed at <b>https://bobsburgers-api.herokuapp.com/.</b>

## License
This web page is licensed under the <b> MIT</b> license.
