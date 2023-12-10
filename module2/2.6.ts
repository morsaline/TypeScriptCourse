{
  // constraints

  type Student = {
    id: number;
    name: string;
    email: string;
  };
  const addCourseToStuden = <T extends Student>(student: T) => {
    const course = "next development course";
    return { ...student, course };
  };

  const student1 = addCourseToStuden({
    id: 222,
    name: "morsaline",
    email: "morsaline@gmail.com",
  });

  const student2 = addCourseToStuden({
    id: 111,
    name: "Ronnie",
    email: "ronnie@gmail.com",
  });

  const student3 = addCourseToStuden({
    id: 44,
    name: "mrz",
    email: "z@gmail.com",
    emni: "emni",
  });
  //
}
