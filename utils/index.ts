export const getInitials = (...name: string[]) => {
  const [firstname, lastname] = name;
  return `${firstname ? firstname.at(0) : ""}${
    lastname ? lastname.at(0) : firstname ? firstname.at(1) : ""
  }`;
};
