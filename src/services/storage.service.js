function load(key) {
  const res = JSON.parse(localStorage.getItem(key)) || [];
  return res;
}

function save(key, data) {
  localStorage[key] = JSON.stringify(data);
}

export const storageService = {
  load,
  save,
};
