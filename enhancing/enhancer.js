module.exports = {
  fail,
  get,
  repair,
  succeed
};

function fail(item) {
  if (item && typeof item === 'object') {

    const objectProperties = Object.getOwnPropertyNames(item);
    const objectNames = ["name", "durability", "enhancement"];

    if (arraysEqual(objectProperties, objectNames)) {
      let durabilityDecrease = 0;
      let enhanceDecrease = 0;
      console.log(item)
      if (item.enhancement < 15) {
        durabilityDecrease = 5;
      } else {
        durabilityDecrease = 10
      }

      if (item.enhancement > 16) {
        enhanceDecrease = 1;
      }

      const newItem = {
        name: item.name,
        durability: item.durability - durabilityDecrease,
        enhancement: item.enhancement - enhanceDecrease
      };
      return newItem;
    }
  } else {
    return null;
  }
}

function get(item) {
  return { ...item };
}

function repair(item) {
  if (item && typeof item === 'object') {
    const objectProperties = Object.getOwnPropertyNames(item);
    const objectNames = ["name", "durability", "enhancement"];
    if (arraysEqual(objectProperties, objectNames)) {
      const newItem = {
        name: item.name,
        durability: 100,
        enhancement: item.enhancement
      };
      return newItem;
    }
  } else {
    return null;
  }
}

function succeed(item) {
  if (item && typeof item === 'object') {
    const objectProperties = Object.getOwnPropertyNames(item);
    const objectNames = ["name", "durability", "enhancement"];
    if (arraysEqual(objectProperties, objectNames)) {
      const enhanced = item.enhancement < 20 ? item.enhancement + 1 : item.enhancement;
      const newItem = {
        name: item.name,
        durability: item.durability,
        enhancement: enhanced
      };
      return newItem;
    }
  } else {
    return null;
  }
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
