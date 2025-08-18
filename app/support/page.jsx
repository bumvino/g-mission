export default function SupportPage() {
    return (
        <>
            {/* 헤드라인 */}
            <section className="headline">
                <h2>
                    <span className="headline-static">선교 사역를 위한<span className="mobile-break"><br /></span>
                    </span>
                    <span className="headline-dynamic">후원 안내</span>
                </h2>
                <p>
                    G Mission은 예배 공간 지원, 장학금, 문화사역 등 모든 사역을 헌신적인 후원자들의 기도와 나눔을 통해 운영합니다.
                    Grace Hall의 대관 수익은 일부 재정에 사용되지만, 더 많은 사역 확장을 위해 후원이 필요합니다.
                </p>
            </section>

            {/* 후원 방식 안내 */}
            <section className="features-section">
                <h2 className="features-heading">후원은 이렇게 사용됩니다</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">⛪</div>
                        <h3>예배 공간 지원</h3>
                        <p>자체 공간이 없는 교회나 모임에 Grace Hall을 무상 또는 저렴한 비용으로 제공합니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎓</div>
                        <h3>장학금 운영</h3>
                        <p>목회자 자녀, 신학생, 미혼모, 한부모 자녀 등을 위한 맞춤 장학금 제공</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎶</div>
                        <h3>문화 사역</h3>
                        <p>합창단, 워십팀, 공연 등 문화사역을 위한 악기, 공간, 운영비 지원</p>
                    </div>
                </div>
            </section>

            {/* 후원 유도 */}
            <section className="worship-info">
                <h2>함께 동역해 주세요</h2>
                <p>
                    여러분의 후원이 더 많은 교회와 다음 세대를 살리는 도구가 됩니다.
                    정기/일시 후원 모두 가능하며, 투명하게 운영됩니다.
                </p>

                <div className="mt-6">
                    <a href="/contact" className="button">
                        후원 문의하기
                    </a>
                </div>
            </section>
        </>
    );
}