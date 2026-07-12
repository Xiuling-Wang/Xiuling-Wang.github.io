import QRCode from "qrcode";

const siteUrl = process.env.SITE_URL ?? "https://xiuling-wang.pages.dev/";

await QRCode.toFile("public/site-qr.svg", siteUrl, {
  type: "svg",
  margin: 1,
  width: 256,
  errorCorrectionLevel: "M",
  color: {
    dark: "#1f2923",
    light: "#fffdf8",
  },
});

console.log(`QR code generated for ${siteUrl}`);
