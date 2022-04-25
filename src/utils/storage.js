const setItem = (item, value) => {
  localStorage.setItem(item, value);
  return `${item}:${value} has been stored.`;
};

const deleteItem = (item) => {
  localStorage.removeItem(item);
  return `${item} has been removed from storage.`;
};

const getItem = (item) => {
  if (localStorage.getItem(item)) {
    return localStorage.getItem(item);
  }
  return null;
};

export default {
  setItem,
  deleteItem,
  getItem,
};
