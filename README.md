# Counter Redux Application

This repository contains a simple Redux application for managing a counter and user authentication state. Below are the details of the files and their functionalities:

# Files and Functions

## ./actions/index.js

This file contains action creators for various actions related to counter manipulation and user authentication.

### INCREMENT: 

Action creator function to increment the counter by 1.

### INCREMENTFIVE: 

Action creator function to increment the counter by a specified amount (5 in this case).

### DECREMENT: 

Action creator function to decrement the counter by 1.

### DECREMENTFIVE: 

Action creator function to decrement the counter by a specified amount (5 in this case).

### login: 

Action creator function to toggle the user authentication state.

## ./reducers/counter.js

This file contains the reducer function for managing the counter state.

### counterReducer: 
Reducer function that handles actions related to counter manipulation. It updates the counter state based on the action type.

## ./reducers/index.js
This file combines all reducers into a single rootReducer using the combineReducers function from Redux. It exports the combined reducer to be used in the Redux store.

## ./reducers/isLogged.js
This file contains the reducer function for managing the user authentication state.

### loginReducer: 
Reducer function that handles actions related to user authentication. It toggles the user authentication state based on the action type.

## ./App.js
This file contains the main React component App, which is responsible for rendering the counter application UI and dispatching actions to update the Redux store.

### App: 
React functional component that renders the counter value, buttons for incrementing/decrementing the counter, and conditional rendering based on the user authentication state.

## ./index.js
This file serves as the entry point of the React application. It configures the Redux store using configureStore from @reduxjs/toolkit, combines reducers, and provides the store to the React application using Provider from react-redux.

### configureStore: 
Function from @reduxjs/toolkit to create a Redux store. It accepts an object with a reducer key containing the combined reducer and optional configurations. In this case, the devTools option enables Redux DevTools extension if available.

### Provider: 
Component from react-redux that wraps the entire application and provides the Redux store to its child components.

## ./reportWebVitals.js
This file contains a function to measure the performance of the React application. It logs the performance results to the console or sends them to an analytics endpoint.

Feel free to explore and modify the code to suit your requirements!

# Usage
To run this application, you need to have a basic understanding of React and Redux. Follow these steps:

Clone the repository to your local machine.
Install dependencies using npm install.
Start the application using npm start.
Interact with the counter application by clicking the buttons to increment or decrement the counter.
Toggle the user authentication state by clicking on the provided button.
Explanation of Updated Code
The provided code uses the @reduxjs/toolkit package for Redux state management, which simplifies the Redux setup and includes utilities to streamline development.