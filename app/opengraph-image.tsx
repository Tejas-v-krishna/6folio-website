import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} | ${site.tagline}`;
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
          justifyContent: "space-between",
          padding: "56px",
          background: "#f2f0e9",
          color: "#0a0a0a",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#6f6d66",
          }}
        >
          <span>Independent creative growth studio</span>
          <span>Est. 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 102, lineHeight: 0.9, fontWeight: 700, letterSpacing: -5 }}>
            Six perspectives.
          </div>
          <div
            style={{
              fontSize: 102,
              lineHeight: 0.9,
              fontWeight: 700,
              letterSpacing: -5,
              color: "#1a2bff",
            }}
          >
            One clear direction.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 24, color: "#6f6d66", maxWidth: 700, lineHeight: 1.35 }}>
            {site.shortDescription}
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -2 }}>6FOLIO™</div>
        </div>
      </div>
    ),
    size
  );
}
