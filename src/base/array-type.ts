
// 函数
interface IFS {
  (name: string): string;
}

const showMessage: IFS = () => {
  return '123';
};

function show() {
  return 123;
}

const show1: IFS = function() {
  return '123';
};

// 数组
const arr1 = [1, 2, 3];          // 类型推断
const arr: Array<number> = [];   // 泛型
const arr2: number[] = [];       // 类型注解

// 泛型 
// function add<T>(num1: T, num2: T): T {
//   return num1;
// }

function add(num1: string, num2: string): string;
function add(num1: number, num2: number): number;
function add(num1: number | string, num2: number | string) {
  console.log(num1);
  console.log(num2);
  return num1;
}

add(1, 2);


function addFn<T>(num1: T, num2: T) {
  let total;

  if(typeof num1 === 'string' && typeof num2 === 'string') {
    total = num1 + num2;
  } else if (typeof num1 === 'number' && typeof num2 === 'number') {
    total = num1 + num2;
  }

  console.log(total);
}

addFn<string>('1', '11');
addFn<number>(1, 11);

// 如果传入的是个数组，则返回；如果是元素，则包装成数组返回
function createArrayFn<T>(value: T) {
  if(value instanceof Array) {
    return value;
  }
  return new Array(value);
}

const stringArr = createArrayFn<string>('一');
console.log(stringArr);

const numberArr = createArrayFn<number[]>([ 1, 3 ]);
console.log(numberArr);



function createArray<T>(length: number, value: T): Array<T> {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

console.log(showMessage);
console.log(show);
console.log(show1);
console.log(arr1);
console.log(arr);
console.log(arr2);
console.log(createArray);



