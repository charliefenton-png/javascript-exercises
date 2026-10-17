const getAge = function(person) {
  const currentYear = new Date().getFullYear();
  const endYear = person.yearOfDeath === undefined ? currentYear : person.yearOfDeath;
  return endYear - person.yearOfBirth;
};

const findTheOldest = function(people) {
  return people.reduce((oldest, current) => {
    return getAge(current) > getAge(oldest) ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;