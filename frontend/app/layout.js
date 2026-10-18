import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/400-italic.css";
import "./globals.css";

const rawSiteUrl = process.env.SITE_URL || "http://localhost:3000";
const siteUrl = (rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`).replace(/\/$/, "");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nest — Đồ đẹp cho nhà | Nội thất & Trang trí",
    template: "%s | Nest — Đồ đẹp cho nhà",
  },
  description: "Cửa hàng nội thất và đồ trang trí phong cách tối giản. Khám phá những món đồ giản đơn, sắc màu dịu nhẹ mang lại an yên cho không gian sống của bạn.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Nest — Đồ đẹp cho nhà | Nội thất & Trang trí",
    description: "Cửa hàng nội thất và đồ trang trí phong cách tối giản. Khám phá những món đồ giản đơn, sắc màu dịu nhẹ mang lại an yên cho không gian sống của bạn.",
    url: siteUrl,
    siteName: "Nest",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nest — Đồ đẹp cho nhà | Bộ sưu tập nội thất và trang trí",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nest — Đồ đẹp cho nhà | Nội thất & Trang trí",
    description: "Cửa hàng nội thất và đồ trang trí phong cách tối giản. Khám phá những món đồ giản đơn, sắc màu dịu nhẹ mang lại an yên cho không gian sống của bạn.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
