// eslint-disable-next-line @typescript-eslint/no-require-imports
require("./globals.css");
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ishita Bery — AI/ML Engineer",
  description:
    "Portfolio of Ishita Bery, an AI/ML engineer specializing in computer vision, deep learning pipelines, and intelligent systems.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Computer Vision",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Ishita Bery",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
