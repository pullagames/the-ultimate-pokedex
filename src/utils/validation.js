const isEmail = (item) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(item);
};

const isMatch = (x, y) => x === y && x && y;

const isNullOrEmpty = (item) => item !== null && item !== '';

const isAnyNull = (array) => {
  let isValid = true;

  array.forEach((item) => {
    if (!item) {
      isValid = false;
    }
  });

  return isValid;
};

const isStrongPassword = (item) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(item);
};

export default {
  isEmail,
  isMatch,
  isAnyNull,
  isNullOrEmpty,
  isStrongPassword,
};
