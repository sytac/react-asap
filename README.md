# react-asap
A ready to use react environment for testing and learning purpose.

## Why?
Because start to write examples in react is not easy. You have to install webpack or browserify, babel, a web server, etc.

## Quickstart

Install react-asap globally.

```
npm install -g react-asap
```

Create a working area folder

```
mkdir test-my-code
cd test-my-code
```

Install the react packages

```
npm install react
npm install react-dom
```

Create a sample app file

```javascript
/* app.js */
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
```

Run the application
```
react-asap app.js
```

**Open your browser at http://localhost:3000**

## How it works
It's a really simple application, it just run a web browser that serve a index html page precompiled

```
<html>
<head></head>
<body>
  <div id="app">This is a react container</div>
</body>
<script type="text/javascript" src="app.js"></script>
</html>
```  

then serve directly the transpiled version of your app.

### Params

-c : the `div` id of the html. (default `app`)

-p : the server port (default `3000`) 
 
