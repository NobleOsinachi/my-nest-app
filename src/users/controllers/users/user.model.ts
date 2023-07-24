export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    age: number,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }
}
