{
  // nullable type

  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to serach");
    }
  };

  searchName(null);

  // unknown typeof
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} ms-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} ms-1`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedInMeterPerSecond(null);

  // never
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  //
  throwError("eror ahhhh");
}
