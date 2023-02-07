const {expect} = require('chai');
let alertInCelcius = require('../alerter/alertInCel');
let alertFailureCount = 0;

describe('tests for alertInCelcius: ', function () {
    it('should return correct number of alerts failed', function () {
        alertFailureCount = alertInCelcius(400.5);
        alertFailureCount = alertInCelcius(303.6);
        console.log(`${alertFailureCount} alerts failed.`);
        expect(alertFailureCount).equals(2); 
        
    });
    ;
});

