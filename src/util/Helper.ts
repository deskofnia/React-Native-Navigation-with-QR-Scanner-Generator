export const getAlphabeticalDays = (days: any) => {
  let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let activeDays = [];
  for (let i = 0; i < days.length; i++) {
    activeDays.push(weekdays[parseInt(days[i])] + ' ');
  }
  return activeDays;
};
