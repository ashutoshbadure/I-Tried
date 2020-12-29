function solution(str) {
  let result = [];
  if (str.length % 2 == 0) {
    for (let i = 0; i < str.length; i++) {
      i % 2 == 0 ? result.push(str.substr(i, 2)) : null;
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      i % 2 == 0 && i !== str.length - 1
        ? result.push(str.substr(i, 2))
        : i % 2 == 0 && i == str.length - 1
        ? result.push(str.substr(i, 1) + "_")
        : null;
    }
  }
  return result;
}
