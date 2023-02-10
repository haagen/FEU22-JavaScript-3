class StaticTest {
  state = "The internal state";

  nonStaticMethod(str) {
    console.log(str);
    console.log(this.state);
  }

  static staticMethod(str) {
    console.log(str);
    //console.log(this.state);
  }

  weirdMethod() {
    console.log("WeirdMethod: " + this);
  }
}

function StaticExample() {
  let myObject = new StaticTest(); // Skapar ett nytt objekt
  myObject.nonStaticMethod("1");

  StaticTest.staticMethod("2");

  myObject.weirdMethod();
  myObject.weirdMethod = myObject.weirdMethod.bind("Kalle");
  myObject.weirdMethod();

  return <>Static Example</>;
}

export default StaticExample;
