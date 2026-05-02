export type Role = {
  company: string;
  location: string;
  title: string;
  dates: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Deep Cognition",
    location: "Remote",
    title: "AI Intern",
    dates: "June 2025 – August 2025",
    highlights: [
      "Built a Haystack-based RAG pipeline to split/index Markdown, embed with SentenceTransformer, and query Anthropic Claude, cutting retrieval latency by 37%",
      "Enabled real-time Q&A across 500+ documentation repositories in LibreChat by exposing the RAG tool through a Flask server with RESTful JSON endpoints",
      "Accelerated invoice ingestion by 65% by automating EML-to-PDF conversion with Playwright, extracting metadata from PDFs/images via OCR, and queueing 200+ documents daily to an AI-driven document processing system",
    ],
  },
  {
    company: "Mercedes Benz",
    location: "India",
    title: "Software Developer",
    dates: "August 2023 – May 2024",
    highlights: [
      "Designed a C++17 solution for HAL-to-Application communication using BlueGo and DeviceManager RPC to retrieve/persist battery data and deliver real-time UI alerts, improving responsiveness and system reliability",
      "Analyzed and fixed Bluetooth and DeviceManager related bugs using GDB and DLT-Viewer, addressing core dump issues and leading to a 20% reduction in overall bug incidence",
      "Increased code coverage by 30% and enhanced system reliability by automating unit testing with GTest",
      "Led hardware bring-up and flashing activities for 45+ development tasks using ET-framework and Monaco tools",
    ],
  },
  {
    company: "Mercedes Benz",
    location: "India",
    title: "Intern",
    dates: "February 2023 – July 2023",
    highlights: [
      "Created a Python command-line application in Linux for automated hardware and software testing, decreasing manual effort, adopted by 10+ engineers for daily workflows",
    ],
  },
];
