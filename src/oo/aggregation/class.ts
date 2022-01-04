import { Student } from "./student";
import { Teacher } from "./teacher";

/**
 * In our "Class" class, we're creating an aggregation
 *   between our Student and Teacher classes.
 * They both exists by their own, and are aggregated in our Class class.
 *   A Class has students and a teacher, but the otherwise is false.
 */
export class Class {
  private students?: Student[];

  constructor(
    private readonly name: string,
    private readonly teacher: Teacher,
  ) { }

  public addStudent(student: Student) {
    this.students = this.students ? [...this.students, student] : [student];
  }

  public getTeacher() {
    return this.teacher.getName();
  }

  public getStudents() {
    return this.students?.map(x => x.getName()).join(`, `);
  }

  public getName() {
    return this.name;
  }
}
