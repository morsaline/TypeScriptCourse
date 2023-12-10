{
  //genric constraint with keyof operator

  type Vehcile = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehcile;

  const person1: Owner2 = "ship";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, Key: Y) => {
    return obj[Key];
  };

  const user = {
    name: "Mr. patwary",
    age: 26,
    address: "ctg",
  };

  const res1 = getPropertyValue(user, "name");
  //   user['name']
  //
}
