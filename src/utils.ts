/**

    Parses a string representing a date in the format "dd/mm/yyyy" and returns a Date object.
    @param dateString A string representing a date in the format "dd/mm/yyyy".
    @returns A Date object representing the parsed date.
    */
export const parseStringToDate = (dateString: string): Date => {
  const dateArray = dateString.split("/");

  return new Date(
    parseInt(dateArray[2]),
    parseInt(dateArray[1]) - 1,
    parseInt(dateArray[0])
  );
};
