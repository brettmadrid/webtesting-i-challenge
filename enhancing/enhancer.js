module.exports = {
  fail,
  get,
  repair,
  succeed
};

function fail(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}

function repair(item) {
  if (item) {
    const newItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement
    };
    return newItem;
  } else {
    return null;
  }
}

function succeed(item) {
  return { ...item };
}
