{
  //distructuring

  const user = {
    id: 23,
    name: {
      firstName: " Md",
      middleName: " Morsaline",
      lastName: "Patwary",
    },
    conactNo: "01757455555",
    address: "chandPur ",
  };

  const {
    conactNo: phone, // change the property name with contactNo : phone thissss
    name: { middleName: midName }, // mind it its called { name alias} kortese
  } = user;

  //array distructuring
  const myFriends = [, "mostofa", "rubel", "riaz", "ronnie", "nazmul", "emon"];

  const [, , , bestfriend, ...rest] = myFriends;
}
