const setItem = (item, value) => {
  localStorage.setItem(item, value);
  return `${item}:${value} has been stored.`;
};

const getItem = (item) => {
  if (localStorage.getItem(item)) {
    return localStorage.getItem(item);
  }
  return null;
};

export default {
  setItem,
  getItem,
};
