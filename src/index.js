const checkFunctionArgs = (args) => {
  if (!args || !args.length) {
    return 0;
  }

  if (args.length === 1 && Array.isArray(args[0])) {
    if (!args[0].length) {
      return 0;
    }
    args = [...args[0]];
  }
  return args;
}


exports.min = function min(...array) {
  if (checkFunctionArgs(array) === 0) {
    return 0;
  } else {
    array = checkFunctionArgs(array);
  };

  let min;

  array.map((item, index) => {
    if (index === 0) {
      min = item;
    }
    if (item < min) {
      min = item;
    }
  })

  return min;
}

exports.max = function max(array) {
  return 0;
}

exports.avg = function avg(array) {
  if (checkFunctionArgs(array) === 0) {
    return 0;
  } else {
    array = checkFunctionArgs(array);
  };

  const reducer = (acc, currentValue) => acc + currentValue;
  
  const arraySum = array.reduce(reducer, 0);

  return arraySum / array.length;
}