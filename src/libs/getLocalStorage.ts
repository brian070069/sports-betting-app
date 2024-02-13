export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);

  return item;
};
