# Q. What is the React?
 A JavaScript library for building user interfaces.

1. Emmet - it genrate some code for you inside vs code
    html:5 - provide basic struchure of html
2. CDN - Content Delivery Network

# To use React in our application we need to import react cdn
e.g. 
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

# For Createing Element in React
    React.createElement('h1', {id:'heading'},'Element Value'); // second argument is taking the attribute value e.g. id:'heading'

# For creating Root in React
    ReactDOM.createRoot(document.getElementById('id_of_root'));

# For Render the value in React
e.g. root.render(heading);

# What is React Element? // React.createElement
React element is a object.


## Home Work.

# Q. What is Emmet?
 Emmet is a powerful web development tool integrated into Visual Studio Code (VSCode) that helps streamline and speed up HTML and CSS coding. It allows you to write HTML and CSS code using shorthand abbreviations and then expand them into full-fledged code snippets. This greatly enhances your productivity by reducing the amount of manual typing required for common HTML and CSS structures. Emmet also supports various features like automatic tag closing, numbering, and selection navigation, making it a popular choice among web developers for improving their coding efficiency in VSCode.


# Q. Difference between a Libaray and Freamwork?
 libraries are more like tools that you use to accomplish specific tasks, while frameworks are like the skeletal structure that guides how you build an entire application.


# Q. What is CDN? why do we use it?
 CDN stands for Content Delivery Network, CDNs are used to optimize the delivery of web content, enhance website performance, improve reliability, and provide additional security features, ultimately resulting in a better user experience.

# Q. Why is React known as React?
 React, the JavaScript library for building user interfaces, is known as "React" because of its core concept: reacting to changes in data and automatically updating the user interface to reflect those changes.

# Q. What is cross-origin in script tag? 
 The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.


# Q. What is the difference between React and ReactDOM?
 
React:
React is a JavaScript library for building user interfaces.
It provides the core functionality for creating and managing components, handling component state and props, and efficiently updating the UI in response to data changes.
React is focused on the logic and structure of UI components.

ReactDOM:
ReactDOM is a specific package that provides methods for rendering React components in the browser.
It's responsible for interacting with the DOM (Document Object Model) to display React components within a web page.
ReactDOM works as the bridge between React components and the actual web page, managing the rendering process.

React is the library that enables you to build user interfaces using components and manage their logic, while ReactDOM is a package that facilitates the rendering of React components in the browser's DOM.



# Q. What is the difference between react.development.js and react.production.js files via CDN?

react.development.js:

This file is intended for development purposes.
It includes additional debugging information and error messages that can help developers identify issues during development.
The file is larger in size due to the inclusion of development-related features.

react.production.js:

This file is optimized for production environments.
It excludes debugging information and error messages to reduce file size and improve performance.
The file is smaller in size compared to the development version.

# Q. What are async and defer?
 both async and defer are techniques for improving the loading performance of web pages containing external scripts. If you want to ensure scripts are executed in order and after the page has been parsed, defer is the better choice. If the order of script execution is not critical and you want to prioritize faster fetching and execution, async can be used.