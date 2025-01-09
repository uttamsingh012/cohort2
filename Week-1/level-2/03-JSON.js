function jsonMethods(jsonString) {
    console.log("Original JSON String:", jsonString);
  
    // Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);
    console.log("After JSON.parse():", parsedObject);
  
    // Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(parsedObject);
    console.log("After JSON.stringify():", jsonStringified);
  }
  
  // Example Usage for JSON Methods
  const sampleJSONString =
    '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
  
  jsonMethods(sampleJSONString);
  
  // practice
  const users = '{"name": "uttam", "age":24, "gender": "male"}'
  console.log(users["1"]);
  // JSON.parse
  // JSON.stringify
  
  const user = JSON.parse(users);
  console.log(user["name"])
  
  
  const user1 = {
    name1: "uttam",
    gender: "male"
  }
  const finalString = JSON.stringify(user1);
  console.log(finalString);