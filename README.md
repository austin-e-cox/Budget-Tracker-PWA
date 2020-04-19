# Budget-Tracker-PWA
This project is a Progressive Web App which uses indexedDb and MongoDB/Mongoose to log budgeting data for a user.
If the user loses internet connection, the budget data will be sent to the server as soon as the connection is restored.

## Functionality
This project allows the user to track their budget by adding individual transactions and seeing a chart of the resulting total through time.

If a user loses connection, the budget data is saved to the local indexedDb, and when the connection is restored, the data is added in bulk to the server. The chart will update locally as data is entered regardless of conection state.

## Run
In VS Code, you may open the terminal (Ctrl+\`), navigate to the main project folder, and run server.js ("node server.js").
Then go to http://localhost:3000 (or the url that is shown on the server console if different)

## Repository
Repo: https://github.com/austin-e-cox/Budget-Tracker-PWA

## Deployed App
App: https://secret-refuge-62857.herokuapp.com/

## Preview:
![Workout Tracker Preview](/budget-preview.png?raw=true "Workout Tracker Preview")