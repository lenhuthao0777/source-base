// interface HookAction {
//   getHook: () => void
//   setHook: () => void
//   name: string
// }

// abstract class Hook {
//   constructor(
//     private name: string,
//     private age: string
//   ) {}
//   abstract getSalary(): number
//   get fullName(): string {
//     return `${this.name} ${this.age}`
//   }
//   compensationStatement(): string {
//     return `${this.name} makes ${this.getSalary()} a month.`
//   }
// }

// class ChildHook extends Hook {
//   constructor(name: string, age: string, salary: string) {
//     super(name, age)
//   }

//   getSalary(): number {
//     this.name
//     return 1
//   }
// }

// export { Hook, ChildHook }
