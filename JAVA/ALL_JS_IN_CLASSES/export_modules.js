'use strict';

function myModule() {
    this.hello = function () {
        console.log('hhello');
    }

    this.goodbye = function() {
        console.log('bye!');
    }
}

module.exports = myModule;

