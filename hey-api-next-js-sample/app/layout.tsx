import { ReactNode } from "react";
import HeyAPIClientConfigWrapper from "@/lib/HeyAPIClientConfigWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeyAPIClientConfigWrapper>{children}</HeyAPIClientConfigWrapper>
      </body>
    </html>
  );
}
