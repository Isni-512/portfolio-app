import Body from '@/components/Body';
import './globals.css';

export const metadata = {
    title: 'portfolio-app | Accueil',
    description: 'Portfolio application, built with Next.js and Tailwind CSS to showcase projects and description about me.',
    openGraph: {
        title: 'portfolio-app | Accueil',
        description: 'Portfolio application, built with Next.js and Tailwind CSS to showcase projects and description about me.',
        images: ['/img/Icon-portfolio.webp']
    },

}
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
        <Body children={children} />
        </html>
    );
}