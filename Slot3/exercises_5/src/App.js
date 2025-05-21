import React from "react";

function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  return (
    <div>
      <h2>Employee Dropdown</h2>
      <select>
        {employees.map((emp, index) => (
          <option key={emp.id || index}>{emp.name}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
