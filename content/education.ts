export type Degree = {
  school: string;
  location: string;
  degree: string;
  dates: string;
  detail?: string;
  bullets?: string[];
};

export const education: Degree[] = [
  {
    school: "University of Southern California",
    location: "Los Angeles",
    degree: "Master of Science in Computer Science",
    dates: "August 2024 – May 2026",
    detail: "CGPA: 3.74",
    bullets: [
      "Coursework: Analysis of Algorithms, Web Technologies, Machine Learning, Database Systems, Natural Language Processing",
    ],
  },
  {
    school: "KLS Gogte Institute of Technology",
    location: "India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    dates: "July 2019 – August 2023",
  },
];
