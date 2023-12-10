{
  //genric interFace

  interface Devloper<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      realeaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }
  type EmilapWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Devloper<EmilapWatch> = {
    name: "morsaline",
    computer: {
      brand: "inetl",
      model: " x",
      realeaseYear: 2022,
    },
    smartWatch: {
      brand: "emilab",
      model: "d5g",
      display: "oled",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Devloper<AppleWatch, YamahaBike> = {
    name: "ronnie",
    computer: {
      brand: "apple",
      model: " x",
      realeaseYear: 2022,
    },
    smartWatch: {
      brand: "applewatch",
      model: "d5g",
      display: "oled",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "yamaha Bike",
      engineCapacity: "good",
    },
  };
  //
}
