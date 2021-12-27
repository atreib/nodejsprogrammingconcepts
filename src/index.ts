interface Test {
  some: () => void;
}

class MyTest implements Test {
  some() {
    console.log('Hello world');
  }
}

const myTest = new MyTest();
myTest.some();
