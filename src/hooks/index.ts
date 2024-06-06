abstract class Person {
  constructor() {}

  abstract getInfo(): string

  getName() {
    return 'abc name'
  }
}

class VietNammese extends Person {
  getInfo(): string {
    return 'Viet Nam mita'
  }
}


export {VietNammese}