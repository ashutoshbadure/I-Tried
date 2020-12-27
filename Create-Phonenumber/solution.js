function createPhoneNumber(numbers) {
  let phoneNumber = "(xxx) xxx-xxxx";
  numbers.forEach((number) => {
    phoneNumber = phoneNumber.replace("x", number);
  });
  return phoneNumber;
}
