import { ReactNode } from "react";
import HeyAPIClientConfigWrapper from "@/lib/HeyAPIClientConfigWrapper";
import ReactQueryProvider from "@/lib/ReactQueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeyAPIClientConfigWrapper>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </HeyAPIClientConfigWrapper>
      </body>
    </html>
  );
}
