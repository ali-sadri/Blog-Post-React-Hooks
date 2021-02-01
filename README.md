# Simple blog post project in React using hooks.

This project is using react hooks to replace Redux state management. With
combination of react hooks 'useState', 'useEffect', 'useReducer', and
'useContext', there wouldn't be any need to use Redux to manage state. This
project is a front end project only and for persistence uses browser local
storage. At the Launch of project, it loads the initial data from couple of json
files and during the user interaction with browser, uses local storage to
persist data.

# To run the app

either run "npm install" and "npm start" or run "yarn install" and "yarn start"

# Known limitation

This project is a simple project to demo use of react hooks instead of Redux and
all of its complexity. Since this project is not connected to any backend logic
to persist data, the app only uses the json files to load the initial sample
data and uses the browser local storage during user interaction with app. As
such, the blog post title is considered to be the unique key and update
functionality is only available to update the blog post text for the same
category and title. In the future this front end project could use a backend
logic and DB to remove these limitations.
