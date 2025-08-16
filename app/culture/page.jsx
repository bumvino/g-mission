export default function CultureMinistryPage() {
    return (
        <>
            {/* 헤드라인 */}
            <section className="headline">
                <h2>
                    <span className="headline-static">예술과 예배가 만나는<span className="mobile-break"><br /></span>
                    </span>
                    <span className="headline-dynamic">문화 사역</span>
                </h2>
                <p>
                    G-MISSION은 음악과 예술을 통해 복음을 전하고 세상을 밝히는 문화를 만들어가고자 합니다.
                    합창단, 찬양팀, 공연, 문화 프로그램 등 다양한 예술 사역을 지원하고 운영합니다.
                </p>
            </section>

            {/* 사역 형태 소개 */}
            <section className="features-section">
                <h2 className="features-heading">문화 사역의 주요 영역</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🎼</div>
                        <h3>G-MISSION 합창단</h3>
                        <p>정기 연습과 연주회를 통해 찬양의 감동을 전하는 사역</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎤</div>
                        <h3>워십 찬양팀</h3>
                        <p>예배 인도와 다양한 모임에서 복음을 전하는 음악 사역</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎭</div>
                        <h3>공연 및 문화행사</h3>
                        <p>Grace Hall에서 진행되는 소규모 음악회, 간증콘서트, 문화강연 등</p>
                    </div>
                </div>
            </section>

            {/* 참여 안내 */}
            <section className="worship-info">
                <h2>문화 사역에 함께하고 싶으신가요?</h2>
                <p>
                    음악, 예술, 기획, 진행 등 다양한 방식으로 문화 사역에 동참하실 수 있습니다.
                    함께 복음이 살아있는 문화를 만들어가요.
                </p>

                <div className="mt-6">
                    <a href="/contact" className="button">
                        문화 사역 참여/문의하기
                    </a>
                </div>
            </section>
        </>
    );
}