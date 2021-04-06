var assert = require('assert');
var javascriptFunctions = require('../javascriptFunctions');
var octalConverter = require('../OctalConverter');

describe('givenTwoIntegersWhenSumThenSuccess', () => {
  it('sum(1, 2) = 3', () => {
    // Given
    var a = 1;
    var b = 2;
    var expectedResult = 3;

    // When
    var actualResult = javascriptFunctions.sum(a, b);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  });
});

describe('givenDecimal1WhenConvert', () => {
  it('convert(1) = 1', () => {
    // Given
    var a = 1;
    var expectedResult = 1;

    // When
    var actualResult = octalConverter.convert(a);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  });
});

describe('givenDecimal2WhenConvert', () => {
  it('convert(2) = 2', () => {
    // Given
    var a = 2;
    var expectedResult = 2;

    // When
    var actualResult = octalConverter.convert(a);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  });
});

describe('givenDecimal8WhenConvert', () => {
  it('convert(8) = 10', () => {
    // Given
    var a = 8;
    var expectedResult = 10;

    // When
    var actualResult = octalConverter.convert(a);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  });
});

describe('givenDecimal95WhenConvert', () => {
  it('convert(95) = 137', () => {
    // Given
    var a = 95;
    var expectedResult = 137;

    // When
    var actualResult = octalConverter.convert(a);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  });
});

describe('givenDecimal2048WhenConvert', () => {
  it('convert(2048) = 4000', () => {
    // Given
    var a = 2048;
    var expectedResult = 4000;

    // When
    var actualResult = octalConverter.convert(a);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  });
});
