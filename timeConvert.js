function getTimeOfDay({ timezone }) {
  const currentTime = new Date();
  const currentHour = currentTime.getUTCHours() + timezone / 3600;

  if (currentHour >= 6 && currentHour < 18) {
    return "day";
  } else {
    return "night";
  }
}
export default getTimeOfDay;
