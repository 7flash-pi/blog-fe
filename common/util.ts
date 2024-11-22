export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { 
    day: 'numeric',       // 'numeric' is the valid value for day
    month: 'long',        // 'long' gives the full month name
    year: 'numeric'      // 'numeric' gives the full year
  };
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
};