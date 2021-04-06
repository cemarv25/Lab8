function convert(num) {
  const octalString = num.toString(8);
  const octalInt = parseInt(octalString);
  return octalInt;
}

module.exports = { convert };
