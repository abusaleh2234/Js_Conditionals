function currentSalary(employees) {
    // console.log(employees);
    let totalSalary = 0
    for (const employee of employees) {
        // console.log(employee);
        const totalIncrement = employee.experience * employee.increment
        const employeeSalary = employee.starting + totalIncrement
        // console.log(employeeSalary);
        
        totalSalary = totalSalary + employeeSalary
        // console.log(totalSalary);
        
    }

    return totalSalary;
}

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
const result = currentSalary(employees);
console.log(result);
