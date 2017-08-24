'use strict';

var Lab = require('lab');
var server = require('../');

const lab = exports.lab = Lab.script();

lab.experiment('Hello World', () => {
    lab.test('GET / returns Hello World', () => {
        return server.inject({
            method: 'GET',
            url: '/'
        }).then((response) => {
            Lab.expect(response).to.be.an.object();
            Lab.expect(response.result).to.not.equal('Hello, world!');
        });
    });
});

