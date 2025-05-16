
import React from 'react';

function Person() {
  const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
}

export default Person;
