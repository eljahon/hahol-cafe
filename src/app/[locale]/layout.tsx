import Script from "next/script";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "@/styles/globals.scss";

import { Providers } from "@/providers";
import { BaseLayout } from "@/components";
import { IChildren, IParams } from "@/types";
import { logoIcon, logoImg } from "@/constants";


const inter = Inter({ subsets: ["latin"] });

interface IRootLayout extends IChildren {
  params: IParams;
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<IRootLayout>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <title>Halol Shop</title>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="Halol Shop - So'nggi gadgetlarni qulay narxlarda bo'lib to'lash orqali oling! Tez va oson xarid qilishingiz uchun maxsus takliflar."
        />
        <meta
          name="keywords"
          content="Halol Shop, nasiya savdo, bo'lib to'lash, gadgetlar, smartfonlar, samsung, apple, iphone, redmi, pocco"
        />
        <meta
          property="og:title"
          content="Halol Shop - Tez, Oson, Qulay va Arzon Xaridlar"
        />
        <meta
          property="og:description"
          content="Hallollik va Qulaylik - So'nggi gadgetlarni bo'lib to'lash orqali xarid qiling! Siz uchun eng yaxshi takliflar."
        /> */}
        <meta property="og:image" content={logoImg.src} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
      
        <meta name="twitter:image" content={logoImg.src} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/svg+xml" href={logoIcon.src} />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <BaseLayout>{children}</BaseLayout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
