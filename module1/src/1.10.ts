{
  // union types | called by  OR in ts

  //   type FrontendDeveloper = " fakibaz developer" | " juniorDeveloper";
  //   type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

  //   type Developer = FrontendDeveloper | FullStackDeveloper;

  //   const newDeveloper: FrontendDeveloper = " juniorDeveloper";

  //   type User = {
  //     name: string;
  //     email: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "AB+" | "A+";
  //   };

  //   const user1: User = {
  //     name: "morsaline",
  //     email: "mo@gmail.com",
  //     gender: "male",
  //     bloodGroup: "O+",
  //   };

  //interSection Type
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  //   const fullstackDeveloper : FullStackDeveloper = {
  //     skills : ["html","css","experrs"]
  //   }

  const fullstackdeveloper: FullStackDeveloper = {
    skills: ["html", "css", "express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
