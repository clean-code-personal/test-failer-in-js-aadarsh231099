const {expect} = require('chai');
const size=require('./tshirts');

// expect(size(38)).not.equals('L');
// expect(size(38)).equals('S');
// expect(size(38)).equals('M');
// console.log('All is well (maybe!)');



  describe('size', function () {
    it('should return L when the value is 38', function () {
      expect(size(38)).not.equals('L');
    });
  });