let employees = [
  {
    name: "Jim",
    experienceInYears: 0
  },
  {
    name: "Jack",
    experienceInYears: 1
  },
  {
    name: "John",
    experienceInYears: 5
  }
];

function experiencedEmployees(firstEmployee, ...employees) {
  console.log(`Name of the employee is ${employees[1].name}`);
}
