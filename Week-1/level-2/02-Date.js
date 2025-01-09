function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date:", currentDate);
  
    // Getting various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());
  
    // Setting components of the date
    currentDate.setFullYear(2022);
    console.log("After setFullYear:", currentDate);
  
    currentDate.setMonth(5); // Setting month to June (zero-indexed)
    console.log("After setMonth:", currentDate);
  
    // Getting and setting time in milliseconds since 1970
    console.log("Time in milliseconds since 1970:", currentDate.getTime());
  
    const newDate = new Date(2023, 8, 15); // Creating a new date
    console.log("New Date:", newDate);
  }
  
  // Example Usage for Date Methods
  dateMethods();
  
  
  //
  
  const currentDate = new Date();
  console.log(currentDate.getDate());
  console.log(currentDate.getMonth()+1);
  console.log(currentDate.getFullYear());
  console.log(currentDate.getHours());
  console.log(currentDate.getMinutes());
  console.log(currentDate.getSeconds());
  
  console.log(currentDate.getTime());
  
  function calculatesum() {
    let a= 0;
    for (let i =0; i<10000; i++){
      a=a+i
    }
    return a;
  }
  const beforedate = new Date();
  const beforetime = beforedate.getTime();
  calculatesum();
  
  const afterDate =new Date();
  const aftertime = afterDate.getTime();
  console.log(afterDate - beforetime);