function getValue(str) {
  const l = str.length;
  const m = parseInt(l / 2);

  if (l % 2 === 0) {
    console.log(str[m - 1], str[m]); //even string both middle value.
  } else {
    console.log(str[m]); //odd string middle value only
  }
}
getValue("Kittu");
getValue("Tech");
