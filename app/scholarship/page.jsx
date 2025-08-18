export default function ScholarshipPage() {
    return (
        <>
            {/* 헤드라인 */}
            <section className="headline">
                <h2>
                    <span className="headline-static">다음 세대를 위한<span className="mobile-break"><br /></span>
                    </span>
                    <span className="headline-dynamic">장학 지원 사역</span>
                </h2>
                <p>
                    G Mission은 미래의 크리스천 리더들을 격려하고 돕기 위해 장학 사역을 운영합니다.
                    믿음과 비전을 품은 학생들이 하나님의 부르심에 응답할 수 있도록 후원하며,
                    다양한 사역 프로그램 참여를 위한 장학금도 함께 제공합니다.
                </p>
            </section>

            {/* 지원 대상 소개 */}
            <section className="features-section">
                <h2 className="features-heading">G Mission 장학금은 이런 분들에게 제공됩니다</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">👨‍👧‍👦</div>
                        <h3>목회자 자녀</h3>
                        <p>신앙 정체성 회복과 공동체 소속감을 위한 수련회 참가비 및 학업 장학금 지원</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">👨‍🏫</div>
                        <h3>젊은 목회자</h3>
                        <p>사역 초기 목회자들의 리더십 개발을 위한 세미나 참가 장학금 및 교육비 지원</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">👩‍❤️‍👨</div>
                        <h3>젊은 목회자 사모</h3>
                        <p>쉼과 회복을 위한 리트릿 참가비 및 정서적 지원 프로그램 제공</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🤱</div>
                        <h3>한부모 가정</h3>
                        <p>
                            자녀 양육과 학업, 경제적 어려움 속에서도 믿음을 지켜나가는 가정에게
                            생활 장학금과 멘토링을 지원합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 문의 유도 */}
            <section className="worship-info">
                <h2>장학금 신청 또는 추천을 원하시나요?</h2>
                <p>
                    해당 사역의 대상자이거나 추천하고 싶은 분이 있다면, 아래 버튼을 눌러 연락해 주세요.
                    G Mission은 함께 하나님의 부르심을 이루는 여정을 동행하고자 합니다.
                </p>

                <div className="mt-6">
                    <a href="/contact" className="button">
                        장학금 문의하기
                    </a>
                </div>
            </section>
        </>
    );
}