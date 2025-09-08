import "./globals.css";

export const metadata = {
  title: "Unstop Login Page",
  description: "unstop login page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
