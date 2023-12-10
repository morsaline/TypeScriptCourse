{
  //
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 19;

  if (age > 18) {
    console.log("addult");
  } else {
    console.log("not Adult");
  }

  const isAdult = age >= 18 ? "adult" : "not Adults";
  console.log({ isAdult });

  // nullish coalescing operators   ///value null and undefind decision making

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";

  console.log({ result1 }, { result2 });

  // optional chainging
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      preseA: string;
      permanent?: string;
    };
  };

  const user: User = {
    name: "morsaline",
    address: {
      city: "chnpur",
      road: "awsome",
      preseA: "ctg town",
    },
  };

  const permanent = user?.address?.permanent ?? "No Permanent adrres";
  console.log({ permanent });
  //
}
