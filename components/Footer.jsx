export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h4>G Mission</h4>
                    <p>Grace Mission은 교회, 다음세대, 문화를 위한 선교 단체입니다.</p>
                </div>

                <div className="footer-col footer-menu">
                    <h4>메뉴</h4>
                    <ul>
                        <li><a href="/church">예배지원</a></li>
                        <li><a href="/scholarship">장학기금</a></li>
                        <li><a href="/gracehall">그레이스홀</a></li>
                        <li><a href="/culture">문화사역</a></li>
                        <li><a href="/support">후원하기</a></li>
                        <li><a href="/contact">문의</a></li>
                    </ul>
                </div>

                <div className="footer-col footer-contact">
                    <h4>문의</h4>
                    <p>Email: <a href="mailto:gmission.contact@gmail.com">admin@g-mission.org</a></p>
                    <p>Address: 3294 Peachtree Industrial Blvd #1000B <br/>
                        Duluth, GA 30096</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} G Mission. All rights reserved.</p>
            </div>
        </footer>
    );
}