export const convertUtcToIst = (utcDateString: string): string => {
  // Create a Date object from the UTC date string
  const utcDate = new Date(utcDateString);

  // Convert UTC time to Indian Standard Time (IST)
  const istDateString = utcDate.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata'
  });

  return istDateString;
};



