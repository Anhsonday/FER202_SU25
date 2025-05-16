
import React from 'react';

function PeopleList() {
  const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" }
  ];

  return (
    <div>
      {people.map((person, index) => (
        <div
          key={index}
          style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}
        >
          <h3>{person.name}</h3>
          <p>Age: {person.age}</p>
          <p>Occupation: {person.occupation}</p>
        </div>
      ))}
    </div>
  );
}

export default PeopleList;
