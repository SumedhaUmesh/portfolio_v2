export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  links: ProjectLink[];
  overview: string;
  highlights: string[];
  architectureNotes: string[];
};

export const projects: Project[] = [
  {
    slug: "deep-research-agent",
    title: "Deep Research Agent",
    tagline:
      "LangGraph multi-agent system with parallel research and citation-backed reports.",
    year: "2025",
    role: "Academic project",
    stack: ["LangGraph", "Python", "Tavily", "Anthropic Claude"],
    links: [],
    overview:
      "A LangGraph-based multi-agent system that decomposes open-ended queries, orchestrates parallel research workflows across many sources, and produces structured, citation-backed reports.",
    highlights: [
      "Built a LangGraph-based multi-agent system that decomposes open-ended queries and orchestrates parallel research workflows across 500+ sources",
      "Generates citation-backed reports, reducing research turnaround time by approximately 60%",
    ],
    architectureNotes: [
      "Orchestration layer coordinates planner, search, and synthesis agents with explicit state transitions",
      "Retrieval integrates Tavily for broad web discovery; Claude handles synthesis and citation formatting",
      "Designed for extensibility: swap models, add domain-specific tools, or tighten citation policies per deployment",
    ],
  },
  {
    slug: "concierge",
    title: "Concierge",
    tagline:
      "Proactive on-device in-car AI agent with grammar-constrained LLM output and sub-second tool routing.",
    year: "2025",
    role: "Academic project",
    stack: ["Python", "FastAPI", "llama.cpp", "WebSockets", "Whisper"],
    links: [],
    overview:
      "A two-stage gate-and-generator loop around a 1.2B-parameter on-device LLM, paired with an intent decomposition engine that routes compound voice commands to keyless geospatial and weather APIs.",
    highlights: [
      "Built a two-stage gate-and-generator loop around a 1.2B-parameter on-device LLM with GBNF grammar-constrained JSON, eliminating parse failures and capping LLM calls at roughly 10% of a 3-second tick",
      "Crafted an intent decomposition engine and tool router that parses compound voice commands into typed sub-intents, dispatching to four keyless APIs (Overpass, Open-Meteo, OSRM, Nominatim) under one second",
    ],
    architectureNotes: [
      "FastAPI + WebSockets for low-latency bidirectional sessions with the head unit or simulator",
      "Whisper for speech-to-text; llama.cpp for constrained generation suitable for automotive safety margins",
      "Tool router enforces typed intents and timeouts per sub-call to keep end-to-end latency predictable",
    ],
  },
  {
    slug: "embedded-health-monitor",
    title: "Embedded Health-Monitor Firmware",
    tagline:
      "Zephyr RTOS firmware on Cortex-M with layered architecture and host-side GoogleTest.",
    year: "2025",
    role: "Academic project",
    stack: ["Zephyr RTOS", "C++17", "Cortex-M", "QEMU", "GoogleTest"],
    links: [],
    overview:
      "C++17 firmware on Zephyr RTOS for ARM Cortex-M using a three-tier layered architecture (drivers, services, algorithms), validated in QEMU under CI with host-side test suites.",
    highlights: [
      "Implemented C++17 firmware on Zephyr RTOS for ARM Cortex-M with a 3-tier layered architecture (drivers, services, algorithms), validated in QEMU under CI",
      "Programmed a two-stream signal pipeline covering heart rate (IIR bandpass + peak detection → BPM) and activity (IMU magnitude variance), verified by host-side GoogleTest suites for fast iteration without target flashing",
    ],
    architectureNotes: [
      "Separation of drivers, services, and algorithms keeps sensor bring-up independent from DSP tuning",
      "QEMU-based CI enables regression runs without hardware; GoogleTest accelerates algorithm iteration",
      "Signal pipeline designed for configurability: coefficients and thresholds isolated for tuning",
    ],
  },
  {
    slug: "mosaic",
    title: "MOSAIC",
    tagline:
      "ROS 2 ADAS scaffold: camera + LiDAR perception, fusion tracking, and FCW/LDW warnings.",
    year: "2025",
    role: "Personal project",
    stack: [
      "ROS 2 Humble",
      "Docker",
      "Python",
      "C++17",
      "Eigen",
      "OpenCV",
      "Foxglove",
    ],
    links: [],
    overview:
      "End-to-end ROS 2 scaffold combining dataset replay, camera perception, LiDAR perception, multi-object tracking with association and EKF primitives, and ADAS warning logic with Dockerized Ubuntu 22.04 workflows.",
    highlights: [
      "Dockerized ROS 2 Humble workspace with custom messages, KITTI replay, and perception nodes in Python and C++",
      "Fusion tracker with association + EKF core; ADAS app publishes FCW and lane-departure style warnings from fused tracks and lane state",
      "Optional Foxglove bridge for live visualization; configurable defaults via YAML and launch arguments",
    ],
    architectureNotes: [
      "Repository layout separates `mosaic_msgs`, replay, perception, fusion, ADAS bringup, and evaluation scripts",
      "Fast DDS profile disables shared memory in Docker Desktop for reliable UDP transport",
      "Extensible scaffold: swap stubs for production perception models and loaders (KITTI, CARLA, or vehicle logs)",
    ],
  },
  {
    slug: "caros-mini",
    title: "CarOSMini",
    tagline:
      "Multi-app Android Automotive infotainment with profile switching driven by Bluetooth ACL events.",
    year: "2025",
    role: "Personal project",
    stack: ["Kotlin", "Android Automotive", "AIDL", "Room", "Gradle"],
    links: [],
    overview:
      "Multi-module AAOS-style system with a core service exposing bound AIDL APIs for profiles and phone connections, a launcher, and stub media, navigation, and dashboard apps—demonstrating real-world automotive UX patterns on dual emulators.",
    highlights: [
      "Bound AIDL services: `IProfileService` and `IPhoneConnectionService` with Room-backed persistence and shared models",
      "Bluetooth `ACTION_ACL_CONNECTED` flows through `PhoneConnectionService` to resolve MAC → profile and broadcast profile changes",
      "Two-emulator workflow (AAOS + phone) with install scripts; documented build phases and emulator limitations",
    ],
    architectureNotes: [
      "Profile switch flow: ACL connect → MAC lookup in `device_profile_links` → broadcast → `ProfileService.setActiveProfile()` → listener notifications across apps",
      "Room tables: `profiles` and `device_profile_links` map Bluetooth MAC addresses to profile IDs",
      "Modular Gradle setup separates `core-service`, launcher, and feature apps for incremental delivery",
    ],
  },
  {
    slug: "distributed-file-sync",
    title: "Distributed File Sync Engine",
    tagline:
      "C++17 + gRPC bootstrap for bidirectional directory sync with structured logging and metrics.",
    year: "2025",
    role: "Personal project",
    stack: ["C++17", "gRPC", "CMake", "Protobuf"],
    links: [],
    overview:
      "Phase-1 bootstrap of a bidirectional directory synchronization system: client and server binaries communicate over gRPC, emit structured logs, and write metrics CSVs—designed for Merkle-tree comparison and delta sync in later phases.",
    highlights: [
      "CMake-based build with `sync_client` and `sync_server` binaries and proto-defined RPC surface",
      "Bootstrap path exercises logging, metrics emission, and clean shutdown suitable for CI on Ubuntu 24.04",
    ],
    architectureNotes: [
      "Roadmap: Merkle tree comparison, rolling-hash delta transfer, inotify watchers, and conflict policies",
      "Observability-first: paired log and metrics directories on both client and server for offline analysis",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
