export const defaultAddress = {
  number: "",
  street: "",
  additional: "",
  postal_code: "",
  city: "",
  country: "",
};

export const formatAddress = (address) => {
  return Object.keys(defaultAddress)
    .filter((key) => address[key])
    .map((key) => address[key])
    .join(", ");
};
