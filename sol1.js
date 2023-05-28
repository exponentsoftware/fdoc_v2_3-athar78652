function processCompanies(companies) {
  return companies.map((company) => {
    const numEmployees = company.employees.length;
    const departments = {};

    company.employees.forEach((employee) => {
      const { department } = employee;

      if (departments[department]) {
        departments[department]++;
      } else {
        departments[department] = 1;
      }
    });

    const modifiedDepartments = Object.entries(departments).reduce(
      (acc, [department, count]) => {
        acc.push({ department, count });
        return acc;
      },
      []
    );

    return {
      ...company,
      numEmployees,
      departments: modifiedDepartments
    };
  });
}

const companies = [
  {
    name: "Company 1",
    employees: [
      { name: "Alice", role: "Developer", department: "Engineering" },
      { name: "Bob", role: "Manager", department: "Engineering" },
      { name: "Charlie", role: "Designer", department: "Design" }
    ]
  }
  // ... (more companies)
];

console.log(processCompanies(companies))
