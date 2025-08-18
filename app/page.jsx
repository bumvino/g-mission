import Link from 'next/link';

export default function HomePage() {
    return (
        <>
            {/* 메인 헤드라인 */}
            <section className="headline">
                <h2>
                    <span className="headline-static">은혜로 연결되는<span className="mobile-break"><br /></span>
                    </span>
                    <span className="headline-dynamic">선교 공동체</span>
                </h2>
                <p>
                    G Mission은 예배 공간 지원, 장학금 후원, 문화 사역, Grace Hall 운영을 통해 교회와 다음 세대,
                    그리고 지역 사회를 섬기는 선교 공동체입니다.
                </p>
            </section>

            {/* 주요 사역 소개 */}
            <section className="features-section">
                <h2 className="features-heading">G Mission의 주요 사역</h2>
                <div className="features-grid">
                    <Link href="/church" className="feature-card">
                        <div className="feature-icon">⛪</div>
                        <h3>교회 공간 지원</h3>
                        <p>예배 장소가 필요한 교회들을 위한 Grace Hall 공간 제공</p>
                    </Link>
                    <Link href="/scholarship" className="feature-card">
                        <div className="feature-icon">🎓</div>
                        <h3>장학 지원</h3>
                        <p>목회자 자녀, 젊은 사역자, 미혼모 가정 자녀 등에게 맞춤형 장학금 지원</p>
                    </Link>
                    <Link href="/gracehall" className="feature-card">
                        <div className="feature-icon">🏛</div>
                        <h3>Grace Hall</h3>
                        <p>작은 극장, 공연, 모임, 세미나 공간으로의 활용과 대관 안내</p>
                    </Link>
                    <Link href="/culture" className="feature-card">
                        <div className="feature-icon">🎶</div>
                        <h3>문화 사역</h3>
                        <p>합창단, 찬양팀, 공연 등을 통한 복음적 문화 확산</p>
                    </Link>
                    <Link href="/support" className="feature-card">
                        <div className="feature-icon">💝</div>
                        <h3>후원</h3>
                        <p>사역에 동참할 수 있는 정기/일시 후원 안내</p>
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="worship-info">
                <h2 className="features-heading">G Mission과 함께하시겠어요?</h2>
                <p>함께 예배하고, 후원하고, 동역하며 은혜의 통로가 되어 주세요.</p>

                <div className="mt-6">
                    <Link href="/contact" className="button">
                        문의하기
                    </Link>
                </div>
            </section>
        </>
    );
}