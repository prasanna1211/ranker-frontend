export const getTomorrowDate = () => {
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  // setting default time to 5:30 AM.
  //if update occurs time changed, then we need to change here also.
  return currentDate.setHours(5, 30, 0, 0);
}