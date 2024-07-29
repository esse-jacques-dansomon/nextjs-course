'use client'
import { use } from 'react'
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/users', label: 'Users' },
  { href: '/docs', label: 'Docs' },
  { href: '/faq', label: 'Faq' },
]


export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
  const patthName = usePathname();
  const isActive = (link: string) => {
    return patthName === link
  }
return (
<html lang="en">

<body className="bg-gray-100 text-gray-900">
    <header className="bg-blue-100 h-20 flex flex-col items-space-between justify-center px-4">
        <nav className="flex justify-between items-center">
            <ul className='flex items-center gap-3'>

            {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href}  className={isActive(link.href) ? 'text-blue-500' : 'text-gray-900'}>
                            {link.label}
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
    </header>

    <main className="p-4">
        {children}
    </main>

    <footer className="bg-blue-100 h-20 text-gray-900 text-center flex flex-col items-center justify-center">
        <p>&copy; 2023 Next.js</p>
    </footer>
</body>

</html>
)
}
