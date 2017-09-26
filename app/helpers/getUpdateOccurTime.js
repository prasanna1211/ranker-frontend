//Update occur time 5:30Am in milli seconds.
const updateOccursTimeInMS = 1506297600000;

export const getUpdateOccurTime = () => {
  var currentDate = new Date();

  //Need to change update occur time only after 5:30,
  //By default it will update after 12 AM (because of date change)
  !(currentDate.getTime() < updateOccursTimeInMS) ?
  	currentDate.setDate(currentDate.getDate() + 1) : null
  
  // setting default time to 5:30 AM.
  //if update occurs time changed, then we need to change here also.
  currentDate.setHours(5, 30, 0, 0)
  return currentDate;
}