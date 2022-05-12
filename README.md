# Frontend project "World Countries"

This project has been completed as part of Integrify FullStack program.

Latest version is deployed at https://world-countries-theta.vercel.app/.

## Project description

### Home page
- The user is presented with a list of countries. For each country we have its flag, common name, languages, population and region. There are also two additional buttons, one for adding a country to the favourites list and one to get more detailed information about the country. 
- The user can sort countries data either by name or by population.
- If the user is interested in a particular country, searching it directly in the list may take a lot of work, so there is an option to filter. The filter takes country name and region into account and is case-insensitive.
- If the user doesn’t like the colour of the page, there is an option to switch themes. On the left side of the App is a list of available themes, and user can change it by clicking one of the buttons. Theme switch is done using Context API, and it is also saved in local storage, so the selected theme persists even if the user reload the page.
- If the user wants to save some country to quickly go back to it later, they can add it to favourites list, by clicking the heart button. The heart button will then change to the bin icon and in the top right corner they’ll see the total number of countries in favourite list. If the user clicks on that icon, they’ll see the list itself. And if they decide that they don’t want a country in favourites list anymore, they can simply remove it by clicking on the bin icon.
### Country page navigation
- If the user wants to get more information about a particular country, they can click on its name in the country list, or click the “MORE” button, or click on the country name in favourites list.

## Running the project

#### Option 1

Prerequsites:
- Node.js v16.15.0

Navigate to the project folder and install dependencies by running:
```
$ npm install
```

Start the app by running:
```
$ npm start
```

#### Option 2 (Docker)

Prerequisites:
- Docker

Navigate to the project folder and build the image, e.g.:
```
$ docker build -t world-countries .
```

Run the image, e.g.:
```
$ docker run -it --rm -p 3000:3000 world-countries
```

Navigate to http://localhost:3000/ in your browser.

## Used technologies

* TypeScript
* Material UI
* React.js, React.js hooks
* React-router
* Redux
* Redux-thunk
* Axios
* Prettier
* ESLint
* Husky & lint-staged
