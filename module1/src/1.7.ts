{
  // object for reUse same variable Name

  //spread Operators
  // rest Operator
  // distructuring

  // learn spread Operators

  const bros1: string[] = ["morsaline", "ronnie", "mostofa"];
  const bros2: string[] = ["rubel", "riaz", "rahad"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "mezba",
    redux: "mir",
    dbms: "mizan",
  };

  const mentors2 = {
    prisma: " firoz",
    next: "Tanmoy ",
    cloud: "nahid",
  };

  const mentorList = { ...mentors1, ...mentors2 };

  //learn rest operators
  const greatfriends = (...frinds: string[]) => {
    // console.log(`Hi ${frnd1}${frnd2} ${frnd3} `);
    frinds.forEach((friend: String) => console.log(`Hi ${friend}`));
  };

  greatfriends("ronnie", "mostofa", "rubel", "riaz");
}
