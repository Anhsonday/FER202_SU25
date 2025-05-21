import React, { useState } from "react";

function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Employee by Name</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredEmployees.map((emp, index) => (
          <li key={emp.id || index}>
            {emp.name} - {emp.department} - Age: {emp.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
