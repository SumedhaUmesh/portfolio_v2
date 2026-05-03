import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.shortName} — Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f6fb",
          padding: 72,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#2563eb",
            fontSize: 22,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 96,
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#0f172a",
            }}
          >
            <span>Sumedha</span>
            <span>Kulkarni</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#475569",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            {profile.heroTagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#64748b",
          }}
        >
          <span>{profile.location}</span>
          <span>{profile.portfolioUrl.replace("https://", "")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
