export const formatter = (number) => {
  return new Intl.NumberFormat("en-IN").format(number);
};
