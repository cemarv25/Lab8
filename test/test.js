var assert = require('assert');
var sum = require('../javascriptFunctions');

describe('givenTwoIntegersWhenSumThenSuccess', () => {
  it('sum(1, 2) = 3', () => {
    // Given
    var a = 1;
    var b = 2;
    var expectedResult = 3;

    // When
    var actualResult = sum(a, b);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  });
});
