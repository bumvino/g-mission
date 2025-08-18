'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <Link href="/" className="logo">
                    <img src="/logo.png" alt="G-MISSION Logo" />
                </Link>

                <nav className="main-nav">
                    <Link href="/church">예배지원</Link>
                    <Link href="/scholarship">장학기금</Link>
                    <Link href="/gracehall">그레이스홀</Link>
                    <Link href="/culture">문화사역</Link>
                    <Link href="/support">후원하기</Link>
                    <Link href="/contact">문의</Link>
                </nav>
            </div>
        </header>
    );
}