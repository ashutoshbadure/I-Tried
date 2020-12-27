function tickets(peopleInLine) {
  let bills = {
    25: 0,
    50: 0,
    100: 0,
  };
  let result = "";
  for (let i = 0; i < peopleInLine.length; i++) {
    const element = peopleInLine[i];
    console.log(element);
    if (element === 25) {
      bills["25"] += 1;
      result = "YES";
    } else if (element === 50) {
      if (bills["25"] > 0) {
        bills["50"] += 1;
        bills["25"] -= 1;
        result = "YES";
      } else {
        result = "NO";
        break;
      }
    } else if (element == 100) {
      if (bills["50"] > 0 && bills["25"] > 0) {
        bills["100"] += 1;
        bills["50"] -= 1;
        bills["25"] -= 1;
        result = "YES";
      } else if (bills["25"] >= 3) {
        bills["100"] += 1;
        bills["25"] -= 3;
        result = "YES";
      } else {
        result = "NO";
        break;
      }
    }
  }
  return result;
}
