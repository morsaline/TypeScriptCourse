{
  // function with genrics
  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGenric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("hello");
  const res2 = createArrayWithGenric<boolean>(true);
  const objarr = createArrayWithGenric<{ id: number; name: string }>({
    id: 22,
    name: "morsaline",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const tuppleArray = createArrayWithTuple<string, number>("morsaline", 2);

  const addCourseToStuden = <T>(student: T) => {
    const course = "next development course";
    return { ...student, course };
  };

  const student1 = addCourseToStuden({
    name: "morsaline",
    email: "morsaline@gmail.com",
  });

  //
}
