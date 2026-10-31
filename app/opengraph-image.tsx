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
          padding: "72px",
          background: "#f3efe6",
          color: "#13120f",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 3, textTransform: "uppercase", color: "#6a6358" }}>
          <span>Independent creative growth studio</span>
          <span>Six collaborators</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 96, lineHeight: 0.95, letterSpacing: -2 }}>Six perspectives.</div>
          <div style={{ fontSize: 96, lineHeight: 0.95, letterSpacing: -2, fontStyle: "italic", color: "#1f34ff" }}>
            One clear direction.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 26, color: "#6a6358", maxWidth: 720 }}>
            {site.shortDescription}
          </div>
          <div style={{ fontSize: 34, letterSpacing: -1 }}>6FOLIO</div>
        </div>
      </div>
    ),
    size
  );
}
