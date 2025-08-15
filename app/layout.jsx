import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        {/* Header */}
        <header className="site-header">
            <div className="header-container">
                <div className="logo">
                    <Link href="/">
                        <img src="/logo.png" alt="G-MISSION Logo" />
                    </Link>
                </div>
                <nav className="main-nav">
                    <Link href="/church">Church</Link>
                    <Link href="/scholarship">Scholarship</Link>
                    <Link href="/gracehall">Grace Hall</Link>
                    <Link href="/culture">Culture</Link>
                    <Link href="/support">Support</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-col">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="G-MISSION" />
                    </div>
                    <p>Grace Mission | 그레이스 미션</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/church">Church Support</Link></li>
                        <li><Link href="/scholarship">Scholarship</Link></li>
                        <li><Link href="/gracehall">Grace Hall</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <address>
                        admin@g-mission.org<br />
                        3294 Peachtree Industrial Blvd #1000B<br />
                        Duluth, GA 30096
                    </address>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} G-MISSION. All rights reserved.</p>
            </div>
        </footer>
        </body>
        </html>
    );
}