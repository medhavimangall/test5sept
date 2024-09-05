let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Function to print developers using map
function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Function to print developers using forEach
function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Function to add new data
function addData() {
  // Adding a new employee object
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });

  // Logging the updated array
  console.log(arr);
}

// Function to remove employees with the profession 'admin'
function removeAdmin() {
  // Filtering out the employee with profession 'admin'
  const updatedArr = arr.filter((employee) => employee.profession !== "admin");

  // Logging the updated array
  console.log(updatedArr);
}

// Function to concatenate the array with a new array of employees
function concatenateArray() {
  // New array with different employee objects
  const newArr = [
    { id: 4, name: "lucas", age: "22", profession: "designer" },
    { id: 5, name: "maria", age: "25", profession: "manager" },
    { id: 6, name: "nina", age: "30", profession: "analyst" },
  ];

  // Concatenating the original array with the new array
  const combinedArr = arr.concat(newArr);

  // Logging the concatenated array
  console.log(combinedArr);
}
