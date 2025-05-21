import React from "react";

function App() {
  const averageAge = (...ages) => {
    const total = ages.reduce((sum, age) => sum + age, 0);
    return (total / ages.length).toFixed(2); 
  };

  const average = averageAge(30, 25, 40, 35, 20); 

  return (
    <div>
      <h1>Average Age</h1>
      <p>The average age is: {average}</p>
    </div>
  );
}

export default App;
