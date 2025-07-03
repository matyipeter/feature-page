import "./globals.css";

export const metadata = {
  title: "Rentivo - Egyszerű ingatlankezelés",
  description: "Your app description",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({ children }) {

  return (
    <html lang="hu">
      <body>
        {children}
      </body>
    </html>
  );
}
