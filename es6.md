# ES6
### String Literal
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/string_literal.js)
```
const val1 = 'my string1';
const val2 = 'my string2';

const conVal = val1 + ', ' + val2;
console.log('test1');
console.log(conVal);

// String literal
const litVal = `${val1}, ${val2}`;
console.log('test2');
console.log(litVal);
``` 

### Destructure object & array
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/destructure_object_array.js)
```
const address = {
  country: 'South Korea',
  city: 'Seoul',
  street: 'Gangnam',
  str_num: 141,
  postcode: '00510',
};

// 객체 비구조화, Object Destructuring.
const country = 'Japan';
const city = 'Osaka';

const { country: nextCountry, city: nextCity } = address;
console.log(`${nextCountry}, ${nextCity}`);

// 배열 비구조화, Array Destructuring.
const [thirdCountry] = ['Japan', 'South Korea', 'America'];
console.log(thirdCountry);

// 객체 리터럴, Object Literal.
function getAddress(country, city, street) {
  const myAddress = {
    country,
    city,
    street,
    str_num: 888,
    postcode: '9999',
  };
  console.log(myAddress);
}

getAddress('Japan', 'Osaka', 'street');
```

### for..of
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/for..of.js)
```
for (var i in years) {
  console.log(typeof i);
  console.log(years[i]);
}
```

### Spread Operator
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/spread_operator.js)
```
// Spread Operator
// let years = [2001, 2010, 2015, 2018];
// let yearsCp = [2000, ...years, 2020];

// console.log(yearsCp);

// let koreanHistory = {
//   liberate: 1945,
//   625: 1950,
// };

// let history = {
//   worldWar1: 1914,
//   worldWar2: 1945,
//   ...koreanHistory,
// };

// console.log(history);

let address1 = {
  country: 'South Korea',
  citiy: 'Seoul',
};

let address2 = {
  ...address1,
  country: 'United State',
};
console.log(address2);
```

### Rest Operator
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/rest_operator.js)

```
// Rest Operator

// past
// function printYears(years) {
//   console.log(arguments);
// }

// now
function printYears(...years) {
  console.log(years);
}

printYears(2000, 2001, 2010, 2015, 2018);
```