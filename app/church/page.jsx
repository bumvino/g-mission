export default function ChurchSupportPage() {
    return (
        <>
            {/* 헤드라인 */}
            <section className="headline">
                <h2>
                    <span className="headline-static">작은 교회를 위한</span>
                    <span className="headline-dynamic">예배 공간 지원</span>
                </h2>
                <p>
                    G-MISSION은 자체 공간이 없는 교회나 개척 교회, 선교 단체를 위해 Grace Hall을 예배 및 모임 공간으로 제공합니다.
                </p>
            </section>

            {/* 지원 방식 설명 */}
            <section className="features-section">
                <h2 className="features-heading">우리는 이렇게 돕습니다</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">⛪</div>
                        <h3>예배 공간 무상 제공</h3>
                        <p>재정적으로 어려운 교회에 Grace Hall 공간을 무료 또는 저렴한 비용으로 제공합니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📅</div>
                        <h3>유연한 일정 지원</h3>
                        <p>정기 모임뿐 아니라 특별 예배나 기도 모임 등 다양한 일정에 맞춰 지원 가능합니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🤲</div>
                        <h3>기도와 동역</h3>
                        <p>공간만이 아니라 함께 기도하며 마음으로 동역하는 사역을 지향합니다.</p>
                    </div>
                </div>
            </section>

            {/* 문의 유도 */}
            <section className="worship-info">
                <h2>예배 공간이 필요하신가요?</h2>
                <p>
                    교회 예배나 모임 장소가 필요한 분들은 언제든지 연락 주세요. 함께 사역의 공간을 만들어가길 바랍니다.
                </p>

                <div className="mt-6">
                    <a href="/contact" className="button">
                        공간 요청 문의하기
                    </a>
                </div>
            </section>
        </>
    );
}