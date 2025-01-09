
class Animal {
    constructor(name, legCount) {
      this.name = name
      this.legCount = legCount
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }
  
  
  class animal {
    constructor(name, legCount, speaks) {
      this.name = name;
      this.legCount = legCount;
      this.speaks = speaks;
    }
    speaks() {
      return ("hi there " + this.speaks);
    }
  }
  // It is object of class where as class is a blueprint
  let dog= new animal("dog", 2, "bhow bhow");
  let cat= new animal("cat", 2, "meow meow");
  console.log(dog);
  cat.speaks();
  // console.log(dog.speaks());