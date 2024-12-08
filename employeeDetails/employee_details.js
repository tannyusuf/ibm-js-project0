const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];
function displayEmployees(){
    const totalEmployees = employees.map((item, index) => `<p>Name: ${item.name} <p/><p>Age: ${item.age} <p/><p>Department: ${item.department} <p/><p>Salary: ${item.salary}<p/>`).join(""); 
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){

    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`The total salary is ${totalSalary}`);
}

function displayHREmployees(){

    const HREmployees = employees.filter(employee => employee.department == "HR");
    const HREmployeesDetails = HREmployees.map((item, index) =>`<p>Name: ${item.name} <p/><p>Age: ${item.age} <p/><p>Department: ${item.department} <p/><p>Salary: ${item.salary}<p/>`).join("");
    document.getElementById('employeesDetails').innerHTML = HREmployeesDetails;
}

function findEmployeeById(id){
    const IDEmployees = employees.filter(employee => employee.id == 2);
    const IDEmployeesDetails = IDEmployees.map((item, index) =>`<p>Name: ${item.name} <p/><p>Age: ${item.age} <p/><p>Department: ${item.department} <p/><p>Salary: ${item.salary}<p/>`).join("");
    document.getElementById('employeesDetails').innerHTML = IDEmployeesDetails;
}
