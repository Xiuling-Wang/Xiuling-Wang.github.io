import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "页面未找到 | Xiuling Wang",
  description: "The requested page could not be found on Xiuling Wang’s academic website.",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <span>404</span>
        <h1>页面未找到</h1>
        <p>这个链接可能已经失效。The page you requested could not be found.</p>
        <div>
          <a href="/">返回中文主页</a>
          <a href="/en/">English homepage</a>
        </div>
      </div>
    </main>
  );
}
