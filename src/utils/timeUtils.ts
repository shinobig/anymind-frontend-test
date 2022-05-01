export const getHourAndMinutes = (time: Date) => {
  return time.toUTCString().substring(17, 22)
}
