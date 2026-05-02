export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Databases & OS",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Linux", "Windows", "macOS"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "Django",
      "React",
      "Angular",
      "Node.js",
      "SwiftUI",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "OpenCV",
    ],
  },
  {
    title: "Cloud",
    items: ["Google Cloud Platform (GCP)", "Microsoft Azure"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "GTest", "GDB", "CMake", "QEMU", "Valgrind"],
  },
];
