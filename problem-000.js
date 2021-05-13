const toGetterSetter = (oldObj) => {
    const properties = Object.getOwnPropertyNames(oldObj);
    const newObj = properties.reduce((prev, key) => {
        prev[`get_${key}`] = function () {
            return prev[key];
        }
        prev[`set_${key}`] = function (val) {
            prev[key] = val;
        }
        return prev;
    }, oldObj)
    return newObj;
  }

const agent = toGetterSetter({
    a: 1,
    b: "b",
    c: false,
  });


  
console.log(agent.get_a())
  agent.set_a(2);
console.log(agent.get_a())