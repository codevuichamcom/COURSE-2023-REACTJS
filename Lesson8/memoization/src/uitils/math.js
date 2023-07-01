const takeVeryLongTime = (number) => {
  console.log("Start takeVeryLongTime");
  const start = new Date();
  while (new Date() - start < 3000);
  console.log("End takeVeryLongTime");
  return number * number;
};

export { takeVeryLongTime };
