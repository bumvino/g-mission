export default function GraceHallPage() {
    return (
        <>
            {/* 헤드라인 */}
            <section className="headline">
                <h2>
                    <span className="headline-static">은혜의 공간<span className="mobile-break"><br /></span>
                    </span>
                    <span className="headline-dynamic">Grace Hall</span>
                </h2>
                <p>
                    Grace Hall은 예배와 문화, 공동체를 위한 공간입니다.
                    소규모 집회, 세미나, 음악회, 파티 등 다양한 용도로 사용 가능하며,
                    공간 사용 수익은 전액 G-MISSION 사역을 위한 재정으로 사용됩니다.
                </p>
            </section>

            {/* 공간 사용 안내 */}
            <section className="features-section">
                <h2 className="features-heading">Grace Hall은 이런 공간입니다</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🎶</div>
                        <h3>음악회 / 공연</h3>
                        <p>소규모 클래식, 워십, 공연 등의 음악적 행사를 위한 아늑한 공연장</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎤</div>
                        <h3>강연 / 세미나</h3>
                        <p>기독교 교육, 리더십 세미나, 간증 모임 등에 적합한 강연 공간</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎉</div>
                        <h3>파티 / 모임</h3>
                        <p>생일, 돌잔치, 송년회 등 개인 행사도 가능 (사역 목적 우선)</p>
                    </div>
                </div>
            </section>

            {/* 대관 및 사역 연결 */}
            <section className="worship-info">
                <h2>공간 대관 및 사역 연결</h2>
                <p>
                    Grace Hall의 공간 사용은 사역과 선한 목적을 위한 분들에게 우선적으로 제공되며,
                    대관 수익은 G-MISSION의 장학금과 교회 공간 지원 사역에 사용됩니다.
                </p>

                <div className="mt-6">
                    <a href="/contact" className="button">
                        Grace Hall 사용 문의하기
                    </a>
                </div>
            </section>
        </>
    );
}