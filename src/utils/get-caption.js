export const getCaption = (value, captions) => {
  const numValue = parseInt(value, 10);
  const restOfDivide = numValue % 10;
  if (restOfDivide === 1 && numValue !== 11) {
    return captions.one;
  } else if (restOfDivide > 1 && restOfDivide < 5) {
    return captions.lessThenFive;
  } else {
    return captions.lessThenTen;
  }
};
