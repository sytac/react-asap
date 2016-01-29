#!/usr/bin/env node
var http = require('http');
var path = require('path');
var fs = require('fs');
var express = require('express');
var babelify = require('babelify');
var browserify = require('browserify-middleware');
var argv = require('yargs')
  .usage('Usage: $0 app.js -c [containerName] -p [port]')
  .demand(1)
  .alias('c', 'container')
  .alias('p', 'port').argv;

var currentFolder = process.cwd();

var divName = argv.container || 'app';
var inputFile = path.resolve(currentFolder, argv._[0]);
console.log('react-asap: a ready to use simple react/es6 environment');
console.log('entry point: ' + inputFile);
console.log('render your react app on the element: document.getElementById(\'' + divName + '\')');
var app = express();

var indexHtml = '<html><head></head>' +
  '<body><div id="' + divName + '">This is a react container</div></body>' +
  '<script type="text/javascript" src="app.js"></script>' +
  '</html>';

app.get('/', function(req, res) {
  res.send(indexHtml);
});

app.listen(3000, function() {
  console.log('Open your browser and type: http://localhost:3000');
});

browserify.settings({
  transform: [babelify.configure({ presets: ["es2015", "react"] })]
});

app.get('/app.js', browserify(inputFile, { debug: false }));

