![Todo-App](https://user-images.githubusercontent.com/58639728/165055676-77d24361-306e-4a60-adab-ce6f4aa7bd4c.png)


# Project Tutorial
Main concepts of tutorial.

- What is React ?
- Why React ?
- What is JSX ?
- Project walkthrough

### Idea : Todo App insipred by Iphone's todo

## Requirements
		NodeJS Version >= 17.7.2
		(check node version by running 'node --version' in your terminal)
		npm version >= 8.5.5
		(check npm version by running 'npm -v' in your terminal)
		npx version >= 8.5.5
		(check npx version by running 'npx --version' in your terminal)
If you are starting from 0 do not worry, I got you covered ! Scroll down to **Project Walkthrough** to see how to get started and install all the necessary commands and packages.


## What is React ? 
React is a JavaScript library for building User Interfaces. It was developed at Facebook in 2011 and is by far the most popular JavaScript library for building User Interfaces. It was released to the public in 2013.
## Why React ?
At the heart of every React app are Components. Components are a piece of the User Interface which are isolated, reusable, and independent. Let's explain all of these terms and more.
- Isolated : Usually in an app, you have a lot of UI components, and each of them has different states but none of these states conflicts with each other.
- Reusable : Components can be reusable, just like functions ! You write them one time and import them in other files.
- Independent : Just like functions components can have their own variables, scope and states. None of these are made 'visible' to the parent element.
- Parent Element : A parent element is **an element that is directly above and connected to an element in the document tree**.
- Child Element : A child element is **an element that is below a parent element and connected to it**.

React also has a massive eco-system that surrounds it. Whatever you are trying to do there is most likely a custom made component for that. For example:

- Static Site - Gatsby
- Server Side Rendering - NextJs
- Animation - Spring
- Forms - Formik
- State Management - Redux, Mobx, Flux etc..

### Components
We use components in React to build complex User Interfaces a little piece at a time.
Every React app has at least one component which is referred to the root component. Recently React introduced **Functional Components** which are components written as JavaScript functions.
Main parts of components are : 

- State : Functionality of Component
- Return : HTML to be displayed when component is used
- Props : Allows us to pass data into a component.

## What is JSX ?
JSX is a special syntax which allows us, developers, to combine HTML and JS syntaxes together and render JavaScript in the document.
It is accessed inside HTML part of the component and it's syntax is similar to this : 

```html
    <div className="...">
	    <h2 className="...">{ user.username }</h2>
	    <!-- { ... } inside the h2 tag is called JSX -->
	    <!-- rest of the code below -->
    </div>
```

In this example we are displaying the username inside h2 tag.

- User object might look something like this : 
```javascript
const user = {
	username: 'Alvi',
	email: "alvidervishaj9@gmail.com",
	tag: "#1286"
}
```
Just by looking at it we can see that user is a constant ( which means that it's value can not be changed after initializing ) and an object. This means that we can access it's username, email and tag just by saying the property we want to get. For example if we want to get user email from the object above : 

```javascript
user.email
```
		
* IMPORTANT : This is plain Javascript syntax. JSX just allows us to render Javascript in HTML basically.
* Any valid Javascript syntax is valid inside JSX


## Project Walkthrough
### Part 1 ( Installing packages and necessary modules )
1. [Install NodeJs](https://nodejs.org/en/)
2. Install npx by running `npm install -g npx` in your terminal.
3. Install React and all of the dependencies to build and run a full React application
	- `npx create-react-app todo`
This command will create a react app named todo. It might ask you to install create-react-app script, in which case you need to give access by entering **y** or  **yes** in terminal
4. After the process is finished we will change our terminal directory by entering  `cd todo` in terminal.
5. Next we will install react-draggable which will help us in making a todo swippable / draggable along the x or y axis, which in turn will give us a better user experience.

### Part 2 ( Setting up Code Editor )
1. Open the newly created project in your favorite code editor. I will continue with Visual Studio Code.
		In terminal type : 
			
		code .
	This will open Visual Studio code in the current directory, which in our case was ./todo
2. Once Vs Code is opened press  ` CTRL + SHIFT + X ` to open **Extensions** tab and search for React / Redux / React-Native snippets. It is a extension created by *dsznajder*.
Now we are finished with the setup and can go straight to writing code.
Happy Coding ! 👻
