import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.role} in ${site.location}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "#03050c",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#8ea2ff", textTransform: "uppercase" }}>
          merrittmason.com
        </div>
        <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1, marginTop: 16 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#c7cdf2" }}>{`${site.role} · ${site.location}`}</div>
      </div>
    ),
    { ...size },
  );
}
