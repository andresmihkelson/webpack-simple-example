builder = require('xmlbuilder');

// Example from the xmlbuilder-js GitHub page
var xml = builder.create('root')
    .ele('xmlbuilder')
    .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
    .end({ pretty: true});

console.log(xml);

var exmpl = require('./exampleModule');
exmpl.testFn();