import { Class } from "./class";
import { Student } from "./student";
import { Teacher } from "./teacher";

const teacherAndre = new Teacher("André");
const studentJoe = new Student("Joe");
const studentRalph = new Student("Ralph");

const developmentClass = new Class("Software Development", teacherAndre);
developmentClass.addStudent(studentJoe);
developmentClass.addStudent(studentRalph);

console.log(`
  Our ${developmentClass.getName()} class is given by ${developmentClass.getTeacher()}.
  Right now, ${developmentClass.getStudents()} are in the class.
`);

console.log(`
  Anyhow, our teacher object exists by itself, having its own behavior,
  like, ie, we can get its name: ${teacherAndre.getName()}
`);

console.log(`
  The same works for our students ${studentRalph.getName()} and ${studentJoe.getName()}
`);

console.log(`We can remove an student, create a new one and our class will still up and running!`);
console.log(`Our class has students and a teacher, but our Student/Teacher can't have an own Class.`);
