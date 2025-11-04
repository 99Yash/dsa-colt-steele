//Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

//The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(
  obj: Record<string, unknown>
): Record<string, unknown> {
  const newObj = { ...obj };

  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (
      typeof obj[key] === 'object' &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      newObj[key] = stringifyNumbers(newObj[key] as Record<string, unknown>);
    }
  }

  return newObj;
}
