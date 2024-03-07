function getDateAndTime() {
  const currentDate = new Date();
  console.log("Current date :", currentDate);
  console.log("Date :", currentDate.getDate());
  console.log("Month :", currentDate.getMonth() + 1);
  console.log("Year :", currentDate.getFullYear());
  console.log("Hour :", currentDate.getHours());
  console.log("Minute :", currentDate.getMinutes());
  console.log("Second :", currentDate.getSeconds());
  console.log("Time in milisecond since 1970:", currentDate.getTime());
}
getDateAndTime();
