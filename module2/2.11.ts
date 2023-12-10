{
  // utility types
  //Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contackNO: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // Omit

  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonReq = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  //readonly

  type PersonReadonly = Readonly<Person>;

  // Record

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
  //
}
