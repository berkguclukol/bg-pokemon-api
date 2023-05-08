import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/app/shared/Header";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'BG Pokemon Page',
    description: ' Pokemon api example prepared with nextjs.',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        </body>
        </html>
    )
}
