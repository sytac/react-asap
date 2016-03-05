# react-asap
A ready to use react command line runner for testing and learning purpose.

## Why?
Because starting to write examples in react is not easy: you have to install webpack or browserify, babel, a web server, etc. This project should get you started in a matter of seconds.


## What is it?
It is a command line tool installed globally. Just edit your javascript file and run it wuth.

```
react-asap index.js
```

The tool transpile it, bundle and serve it in a index.html container on a localhost port.

It's made to remove from the learning process all the complexity related to the transpiling and bundling of the javascript files.

**THIS IS NOT A BOILERPLATE**
If you're looking for a complete boilerplate check this:

https://github.com/sytac/react-redux-scaffold

## Quickstart

Install react-asap globally.

```
npm install -g react-asap
```

Create a working area folder:

```
mkdir test-my-code
cd test-my-code
```

Install the react packages:

```
npm install react
npm install react-dom
```

Create a sample app file:

```javascript
/* app.js */
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);
```

Run the application

```
react-asap app.js
```

**Open your browser at http://localhost:3000**

## How it works
It's a really simple application, it just runs a web browser that serves a precompiled index html page:

```
<html>
<head>
#optional CSS
#optional JS
</head>
<body>
  <div id="app">This is a react container</div>
</body>
<script type="text/javascript" src="app.js"></script>
</html>
```

where `app.js` is provided as the transpiled version of your app.

#### Add a css file
Using the parameter `--style` is possible to add a stylesheet file to the html.

```
react-asap index.js --style style.css
```

```
react-asap index.js -style https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css
```
#### Add an external js
Using the parameter `--jsExt` it is possible to add an external js in the head of the document.

```
react-asap index.js --jsExt https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js
```

### Features

- automatic code recompilation
- serve statically the file in the current folder

### Params

-c, --container : the `div` id of the html. (default `app`)

-p, --port : the server port (default `3000`)

-s, --style : add a css file

-j --jsExt : add an external js
