function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year";
      } else {
        return "Not leap year";
      }
    } else {
      return "Leap year";
    }
  } else {
    return "Not leap year.";
  }
}
// leapYear(2019);
console.log(leapYear(2024));
