// Code your solution here
const driv = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function findMatching(drivers,myString){
  return drivers.filter(function(driver){
  return driver.toUpperCase() === myString.toUpperCase();
  })
  }

  function fuzzyMatch(drivers, myString){
    return drivers.filter(function(driver){
    return driver.charAt([0,1]) === myString.charAt([0,1]);
    })
  }

  function matchName(drivers, myString){
    return drivers.filter(function(driver){
    return driver.name === myString;
    
    })
  

  }
  