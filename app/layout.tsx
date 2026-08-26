import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['latin'], weight: ['400','500','600'], style: ['normal','italic'] });
const sans = Manrope({ variable: '--font-sans', subsets: ['latin'], weight: ['400','500','600'] });
export const metadata: Metadata = { metadataBase:new URL('https://regalemboidery.in'), title:'Regal Embroidery | Custom Indian Occasionwear', description:'Custom Indian clothes for weddings, celebrations and special events. Designed with you and intricately embroidered in India.', openGraph:{title:'Regal Embroidery | Made for your most beautiful days',description:'Custom Indian occasionwear for weddings, celebrations and everything worth remembering.',url:'https://regalemboidery.in',siteName:'Regal Embroidery',type:'website',images:[{url:'/og.png',width:1200,height:630,alt:'Regal Embroidery — Made for your most beautiful days.'}]}, twitter:{card:'summary_large_image',title:'Regal Embroidery | Custom Indian Occasionwear',description:'Made for your most beautiful days.',images:['/og.png']} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>}
