export const ShippingType = (type) => {
  switch (type) {
    case "economy":
      return {
        name: "Economy",
        price: 10,
        estimatedArrival: "Dec 20-23",
      };
    case "regular":
      return {
        name: "Regular",
        price: 15,
        estimatedArrival: "Dec 18-20",
      };
    case "cargo":
      return {
        name: "Cargo",
        price: 20,
        estimatedArrival: "Dec 17-19",
      };
    default:
      return null;
  }
};
