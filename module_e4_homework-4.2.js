function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Alex", 
    ownCity: "Moscow",
    age: 20,
    course: "Frontend"
  };


  console.log(showProps(student1, "sername"));  // false
  console.log(showProps(student2, "name")); // true