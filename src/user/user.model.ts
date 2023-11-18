import { IsEmail, IsNumberString, IsString } from "class-validator";

export class User {
  id: string;

  @IsString()
  firstName: string;

  lastName: string;

  // @IsEmail()
  email: string;
  age: number;

  // @IsNumberString()
  phone: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    phone?: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.phone ? "555 - 453 -3321 - 13322" : phone;
  }
}
