{
  // type assertion

  let anything: any;

  anything = "Next level web development";

  anything = 222;

  // (anything as number).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedVlae = parseFloat(value) * 1000;
      return ` converted value ${convertedVlae}`;
    }

    if (typeof value === "number") {
      value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const res2 = kgToGm("1000") as string;

  type CustomError = {
    massage: string;
  };

  try {
  } catch (err) {
    console.log((err as CustomError).massage);
  }

  //
}
