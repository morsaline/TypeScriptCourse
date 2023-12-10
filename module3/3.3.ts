{
  // type guards

  // typeof --> type guard

  type Alphaneumaeric = string | number;

  const add = (
    param1: Alphaneumaeric,
    param2: Alphaneumaeric
  ): string | number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const res1 = add(2, 5);
  const res2 = add("2", "3");
  console.log(res2);

  // in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is  ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is  ${user.name} }`);
    }
  };

  const normalUser: NormalUser = {
    name: "morasline",
  };
  const adminUser: AdminUser = {
    name: "ronnie",
    role: "admin",
  };

  getUser(adminUser);

  //
}
