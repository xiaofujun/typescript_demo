
// 定义 Person 接口
interface Person {
  name: string;
  age: number;
  getInfo: () => void;
}
// 定义一个变量 person ,有 name, age 属性
const person: Person = {
  name: 'xiaohong',
  age: 23,
  getInfo() {
    console.log(`${this.name} is ${this.age} years old`);
  }
};

person.getInfo();

// 定义接口 Student ，继承 Person
interface Student extends Person {
  stuNo: string,
  class: string
}

// 定义一个变量 stu ，有 name, age, stuNo, class 属性
const stu: Student = {
  name: 'zhangsan',
  age: 14,
  stuNo: '03147006',
  class: '1',
  getInfo() {
    console.log(`${this.name} is ${this.age} years old. His stuNo is ${this.stuNo}`);
  }
};

stu.getInfo();


// 上述两个例子对比发现： interface 定义的接口可以继承其他接口

// 定义类 Animal
class Animal {
  name: string;
  age: number;
}

const cat: Animal = {
  name: 'cat',
  age: 12
};

console.log(cat);

// 定义接口 Behavior
interface Cat extends Animal {
  miao: () => void;
}

const blackCat: Cat = {
  name: 'BlackCat',
  age: 1,
  miao() {
    console.log('黑猫警长');
  }
};

blackCat.miao();

// 定义接口 Bark
interface Bark {
  bark: () => void;
}

// 定义类 Dog
class Dog extends Animal implements Bark {
  bark() {
    console.log('汪汪汪');
  }
}

const dog = new Dog();
console.log(dog);

// 上述两个例子对比发现：接口可以通过 extends 继承类 class。类可以通过 extends 继承类，可以通过 implements 继承实现接口 

abstract class AnimalClazz {
  abstract behavior(): void;
  constructor(public name: string, public age: number) {} 
}

// const peiqi = new AnimalClazz();

class Pig extends AnimalClazz {
  constructor(name: string, age: number) {
    super(name, age);
  }
  behavior() {
    console.log(this.age);
  }
}

const pig = new Pig('佩奇', 4);
pig.behavior();
console.log(pig);

/**
 * 总结：
 * 1. interface 接口 可以通过 extends 继承接口（interface、type）或者 类（class）
 * 2. class 类可以通过 extends 继承类，也可以通过 implements 实现接口。
 * 3. 抽象类不能实例化。继承抽象类，必须要实现抽象类内部的抽象方法。
 */
