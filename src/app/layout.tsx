import Providers from '@/utils/providers'
import './globals.css'
import type { Metadata } from 'next'
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Maitê',
  description: 'Melhor site para gerenciar fotos da sua coleção',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" data-theme="corporate">
      <body className={roboto.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}