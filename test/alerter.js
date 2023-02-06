const {expect} = require('chai');
let alertInCelcius = require('./alertInCel');
let alertFailureCount = 0;

describe('alertInCelcius ', function () {
    it('should return no of alerts failed', function () {
        alertFailureCount = alertInCelcius(400.5);
        alertFailureCount = alertInCelcius(303.6);
        console.log(`${alertFailureCount} alerts failed.`);
        expect(alertFailureCount).equals(2); 
        
    });
    ;
});

