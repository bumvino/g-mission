export default function ContactPage() {
    return (
        <>
            {/* 헤드라인 */}
            <section className="headline">
                <h2>
                    <span className="headline-static">G Mission에</span>
                    <span className="headline-dynamic">문의하기</span>
                </h2>
                <p>
                    예배 공간 대관, 장학금 신청, 문화 사역 참여, 후원 관련 등 어떤 내용이든 환영합니다.
                    아래 연락처를 통해 문의 주시면 빠르게 답변드리겠습니다.
                </p>
            </section>

            {/* 연락처 정보 */}
            <section className="worship-info">
                <h2>연락처 정보</h2>
                <div className="text-base text-gray-700 leading-relaxed text-center">
                    <p className="mb-3">
                        📧 이메일: <a href="mailto:contact@gmission.org" className="text-blue-600 hover:underline">
                        admin@g-mission.org
                    </a>
                    </p>
                    <p className="mb-3">
                        📍 주소: 3294 Peachtree Industrial Blvd #1000B, Duluth, GA 30096
                    </p>
                    <p>
                        전화번호는 필요 시 요청해 주세요.
                    </p>
                </div>
            </section>

            {/* (선택) 구글폼 또는 외부 링크 문의 폼 */}
            {/* <section className="worship-info">
        <h2>온라인 문의 양식</h2>
        <p>아래 양식을 통해 메시지를 남겨주시면 이메일로 회신드리겠습니다.</p>
        <iframe src="https://docs.google.com/forms/..." width="100%" height="600" style={{ border: 'none' }} />
      </section> */}
        </>
    );
}