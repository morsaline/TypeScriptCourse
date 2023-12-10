{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNUmbers: number[] = [3, 5, 4];
  const rollNUmbers: GenericArray<number> = [3, 5, 4];

  //   const mentors: string[] = ["mr x", "mr y", "mr z"];
  const mentors: GenericArray<string> = ["mr x", "mr y", "mr z"];

  //   const boolArray: boolean[] = [true, false];
  const boolArray: Array<boolean> = [true, false];

  const user: GenericArray<{ name: string; age: number }> = [
    { name: "morsaline", age: 42 },
    { name: "ronnie", age: 423 },
  ];

  //genric tuple
  type GenericTuple<X, Y> = [X, Y];
  //   const manush: GenericTuple<string, string> = ["mr.x", "mr.y"];
  type Person = {
    name: string;
    email: string;
  };

  const userWithId: GenericTuple<number, Person> = [
    1222,
    { name: "morsaline", email: "a@gmail.com" },
  ];
  //
}
