{
  //mapped type
  const arrOfNumbers: number[] = [641, 25, 44];
  //   const arrOfString: string[] = ["641", "25", "44"];

  const arrOFStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrOFStrings);

  type AreaNum = {
    height: number;
    widht: number;
  };

  type Height = AreaNum["height"]; // lookup types
  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 22,
  };
  //
}
