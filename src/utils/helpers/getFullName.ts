export const getFullName = (
  firstName?: string,
  lastName?: string,
  middleName?: string
): string => [firstName, lastName, middleName].join(" ");
