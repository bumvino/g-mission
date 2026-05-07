export default function GraceHallPricingPage() {
    return (
        <div className="pricing-page">
            {/* HERO */}
            <section className="pricing-hero">
                <p className="hero-label">Grace Hall</p>

                <h1>
                    공간 대관 안내
                </h1>

                <p className="hero-description">
                    Grace Hall은 예배와 문화, 공동체를 위한 공간입니다.
                    <br />
                    공간 사용 수익은 전액 G-MISSION 사역과 장학 사역을 위해 사용됩니다.
                </p>
            </section>

            {/* BASE PRICING */}
            <section className="pricing-section">
                <h2 className="section-title">기본 대관 요금</h2>

                <div className="pricing-wrapper">
                    <div className="pricing-card featured">
                        <div className="featured-badge">
                            MAIN RENTAL
                        </div>

                        <h3>Grace Hall Rental</h3>

                        <div className="price">
                            $150
                            <span>/hr</span>
                        </div>

                        <p className="minimum-time">
                            Minimum 2 Hours
                        </p>

                        <ul>
                            <li>예배 / 세미나 / 공연 / 모임 가능</li>
                            <li>시간 단위 추가 가능</li>
                            <li>아늑하고 감각적인 공간</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ADDONS */}
            <section className="pricing-section">
                <h2 className="section-title">Add-on Services</h2>

                <div className="addons-grid">
                    <div className="addon-card">
                        <h3>Echo</h3>

                        <p className="addon-sub">
                            피아노 + Mic System + 음향기사
                        </p>

                        <div className="addon-price">
                            $500
                        </div>

                        <p className="addon-detail">
                            First 2 Hours
                        </p>

                        <p className="addon-extra">
                            + $250/hr after 2 hours
                        </p>
                    </div>

                    <div className="addon-card">
                        <h3>Keyboard 1</h3>

                        <div className="addon-price">
                            $200
                        </div>

                        <p className="addon-detail">
                            First 2 Hours
                        </p>

                        <p className="addon-extra">
                            + $100/hr after 2 hours
                        </p>
                    </div>

                    <div className="addon-card">
                        <h3>Keyboard 2</h3>

                        <div className="addon-price">
                            $200
                        </div>

                        <p className="addon-detail">
                            First 2 Hours
                        </p>

                        <p className="addon-extra">
                            + $100/hr after 2 hours
                        </p>
                    </div>

                    <div className="addon-card">
                        <h3>Drums</h3>

                        <div className="addon-price">
                            $200
                        </div>

                        <p className="addon-detail">
                            First 2 Hours
                        </p>

                        <p className="addon-extra">
                            + $100/hr after 2 hours
                        </p>
                    </div>

                    <div className="addon-card">
                        <h3>Live Streaming</h3>

                        <div className="addon-price">
                            $300
                        </div>

                        <p className="addon-detail">
                            First 2 Hours
                        </p>

                        <p className="addon-extra">
                            + $150/hr after 2 hours
                        </p>
                    </div>
                </div>
            </section>

            {/* NOTE */}
            <section className="pricing-note-section">

                <a
                    href="https://gracehall.skedda.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reserve-button"
                >
                    Grace Hall 예약 진행하기
                </a>
            </section>
        </div>
    );
}