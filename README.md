# REACT RICK & MORTY - APP 🖥

## SETUP : ⚙️
- create-react-app

## REACT APP : 🧮
- In this app, you will create a web app React that displays characters from Rick & Morty API 
- Please, don't forget to make atomic commits with explicit messages 
- You can find the API documentation there : [Rick&Morty API](https://rickandmortyapi.com/documentation "Documentation") 

### Starting point 📌
- 🪣 Clean React App, delete all files useless like :
  App.css / App.test.js / reportWebVitals.js / index.css / logo.svg /     setupTests.js and don't forgot to delete imports from this file in index.js and App.js
<br>

- Change App.js by App.jsx and use ES6 synthaxe :
  (```function App () {}``` become ```const App = () => {}```)
- In src folder, create a new folder named "components" and create in here a ```<Header />``` component that displays a "Welcome {name}" message.
- Import this component ```<Header />``` in App.jsx then pass a props name to the Header Component to display "Welcome Jenny" for example.
  
### Some list 📝
- Create to news components : ```<CharactersList />``` and ```<CharacterCard />```
- In the ```<CharactersList />``` component, you will need to get the list of characters from the R&M API, map on all the Characters and for each Character you will use ```<CharacterCard />``` to display his name and his picture.
- Your ```<CharacterCard />``` component will need some props to display the character informations. You can add more informations than name and image if you want.

### Filtering 🗒
- Now that your are displaying all characters, your next mission is to add a filter on this list.
- Add a button to the ```<CharactersList />``` component, when you click on it, it will display only the characters who are alive. If you click on this button again, the list will display all the characters again.

### Paginate ⏪ ⏩ 
- As you can see, this API allow you to paginate the results (more than 800)
- On the ```<CharactersList />``` component, add two button PREV & NEXT, when you click on them, you will have the results of characters from the next or the prev page. 

### Details Page 📖
You are going to use react-router and react-router-dom
- refactor your code to implement a router with two route :
- "/" will display your ```<CharactersList />``` component
- "/character/:id" will display the next component you are going to create
- create ```<CharacterDetails />``` component will need to fecth data from API and display detailed information about a current character (you can choose to display what you want about the character)
- In ```<CharacterCard />``` component, add a link who redirect on the "/character/:id" with the id of the character

### Bonus 🧨
- In ```<CharacterCard />``` component, add a button to deleting the character from the list in ```CharactersList />```
- Use TAILWIND : You can start by looking at the documentation about how to install it. [Tailwind installation for React](https://tailwindcss.com/docs/guides/create-react-app "Documentation")
