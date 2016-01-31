#!/usr/bin/env node
var http = require('http');
var path = require('path');
var fs = require('fs');
var express = require('express');
var babelify = require('babelify');
var browserify = require('browserify-middleware');
var presetEs2015 = require('babel-preset-es2015');
var presetReact = require('babel-preset-react');
var argv = require('yargs')
  .usage('Usage: $0 app.js -c [containerName] -p [port] -s [cssImport]')
  .demand(1)
  .alias('s', 'style')
  .alias('c', 'container')
  .alias('p', 'port').argv;

var currentFolder = process.cwd();

var port = argv.port || 3000;
var divName = argv.container || 'app';
var inputFile = path.resolve(currentFolder, argv._[0]);
var app = express();

var cssString = '';
if (argv.style) {
  cssString = '<link href="' + argv.style + '" rel="stylesheet">';
}

try {
  var stat = fs.statSync(inputFile);
} catch (error) {
  console.log('File ' + inputFile + ' not found.');
  process.exit(1);
}

var indexHtml = '<html><head>' + cssString + '</head>' +
  '<body><div id="' + divName + '">This is a react container</div></body>' +
  '<script type="text/javascript" src="app.js"></script>' +
  '</html>';

console.log('react-asap: a ready to use simple react/es6 environment');
if (argv.style) {
  console.log('Added style: ' + argv.style);
}
console.log('Entry point: ' + inputFile);
console.log('Render your react app on the element: document.getElementById(\'' + divName + '\')');
app.get('/', function(req, res) {
  res.send(indexHtml);
});

app.listen(port, function() {
  console.log('Open your browser and type: http://localhost:' + port);
});

browserify.settings({
  transform: [babelify.configure({ presets: [presetEs2015, presetReact] })]
});

app.get('/app.js', browserify(inputFile, { debug: false }));

app.use(express.static(currentFolder));

