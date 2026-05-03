export type SkillGroup = {
  title: string;
  items: string[];
};

/** Grouped mix of résumé breadth + stacks from `content/projects.ts` work. */
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "C++17", "Kotlin", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Agents, LLMs & realtime backends",
    items: [
      "LangGraph",
      "FastAPI",
      "llama.cpp",
      "Whisper",
      "Tavily",
      "Anthropic Claude",
      "WebSockets",
    ],
  },
  {
    title: "Embedded & robotics",
    items: [
      "Zephyr RTOS",
      "Cortex-M",
      "ROS 2 Humble",
      "Eigen",
      "OpenCV",
      "Foxglove",
    ],
  },
  {
    title: "Android Automotive",
    items: ["Android Automotive", "AIDL", "Room", "Gradle"],
  },
  {
    title: "Web frameworks & ML libraries",
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
    ],
  },
  {
    title: "Databases & OS",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Linux", "Windows", "macOS"],
  },
  {
    title: "Cloud",
    items: ["Google Cloud Platform (GCP)", "Microsoft Azure"],
  },
  {
    title: "Tools, build & IPC",
    items: [
      "Git",
      "Docker",
      "CMake",
      "gRPC",
      "Protobuf",
      "GoogleTest",
      "GDB",
      "QEMU",
      "Valgrind",
    ],
  },
];
