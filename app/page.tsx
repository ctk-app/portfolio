export default function Home() {
  return (
    <>
      {/* ──── 네비게이션 ──── */}
      <nav className="fixed top-0 w-full z-50 border-b" style={{ background: "rgba(10,10,10,0.8)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-lg font-bold gradient-text">YW.dev</span>
          <div className="hidden sm:flex gap-6 text-sm" style={{ color: "var(--muted)" }}>
            <a href="#work" className="hover:text-white transition-colors">프로젝트</a>
            <a href="#services" className="hover:text-white transition-colors">서비스</a>
            <a href="#portfolio" className="hover:text-white transition-colors">포트폴리오</a>
            <a href="#contact" className="hover:text-white transition-colors">문의</a>
          </div>
          <a href="#contact" className="text-sm font-medium" style={{ color: "var(--accent-light)" }}>
            상담 문의
          </a>
        </div>
      </nav>

      {/* ──── 히어로 ──── */}
      <section className="min-h-screen flex items-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="tag mb-6">SaaS 2종 직접 개발 · 운영 중</div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
            단순 홈페이지가 아닌,<br />
            <span className="gradient-text">사업에 필요한 시스템</span>을<br />
            만듭니다.
          </h1>
          <p className="text-lg mb-8 max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
            세무 SaaS, 관세 SaaS를 혼자 기획부터 개발, 운영까지 해본 경험이 있습니다.<br />
            홈페이지부터 업무 자동화까지, 필요한 걸 직접 만들어드립니다.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="btn-primary inline-block">프로젝트 문의</a>
            <a
              href="#work"
              className="inline-block px-8 py-3.5 rounded-xl text-sm font-medium border hover:bg-white/5 transition-colors"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              프로젝트 보기
            </a>
          </div>

          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-2 mt-12">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Claude AI", "Vercel", "SEO"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ──── 직접 만든 서비스 ──── */}
      <section id="work" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium mb-2" style={{ color: "var(--accent)" }}>PROJECTS</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">직접 만들고 운영 중인 서비스</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* CTK */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: "var(--accent)" }}>C</div>
                <div>
                  <h3 className="font-bold text-lg text-white">CTK</h3>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>사장님 세무 도우미 · B2C SaaS</p>
                </div>
              </div>
              <ul className="text-sm space-y-1.5 mb-4" style={{ color: "var(--muted)" }}>
                <li>세금 계산기 6종 (종합소득세, 부가세 등)</li>
                <li>AI 경비 분류 + 간편장부</li>
                <li>SEO 블로그 89편 — Google 검색 상위 노출</li>
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Next.js", "Supabase", "PortOne 결제", "PWA", "SEO"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#1e1e2e", color: "var(--accent-light)" }}>{t}</span>
                ))}
              </div>
              <a href="https://ctk-app.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline" style={{ color: "var(--accent-light)" }}>
                ctk-app.com &rarr;
              </a>
            </div>

            {/* 세움 */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: "#059669" }}>S</div>
                <div>
                  <h3 className="font-bold text-lg text-white">세움</h3>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>관세 정산 자동화 · B2B SaaS</p>
                </div>
              </div>
              <ul className="text-sm space-y-1.5 mb-4" style={{ color: "var(--muted)" }}>
                <li>관세사 사무소 36곳 현장 리서치 기반 설계</li>
                <li>AI OCR로 수입신고필증 자동 인식</li>
                <li>정산 대장 자동 생성 + HS코드 검색</li>
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Next.js", "Supabase", "Claude AI", "OCR", "관세청 API"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#0f2922", color: "#34d399" }}>{t}</span>
                ))}
              </div>
              <a href="https://seumtg.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline" style={{ color: "#34d399" }}>
                seumtg.com &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── 서비스 ──── */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium mb-2" style={{ color: "var(--accent)" }}>SERVICES</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">이런 걸 만들 수 있습니다</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "01",
                title: "홈페이지 제작",
                desc: "반응형 원페이지부터 다페이지까지.\n모바일 대응, SEO 기본 세팅 포함.",
                price: "30만원~",
                items: ["반응형 디자인", "SEO 최적화", "모바일 대응", "도메인 연결 + 배포"],
              },
              {
                icon: "02",
                title: "웹 애플리케이션",
                desc: "예약, 관리자 페이지, 회원 기능 등.\n사업에 맞는 기능을 직접 개발.",
                price: "100만원~",
                items: ["회원가입 / 로그인", "관리자 대시보드", "결제 연동", "데이터베이스 설계"],
              },
              {
                icon: "03",
                title: "AI 기능 개발",
                desc: "기존 서비스에 AI를 붙여드립니다.\n자동 분류, OCR, 챗봇 등.",
                price: "별도 협의",
                items: ["AI 챗봇", "문서 자동 인식 (OCR)", "데이터 자동 분류", "맞춤 추천 시스템"],
              },
            ].map((s) => (
              <div key={s.title} className="card p-6">
                <span className="text-3xl font-black" style={{ color: "var(--accent)" }}>{s.icon}</span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">{s.title}</h3>
                <p className="text-sm mb-4 whitespace-pre-line" style={{ color: "var(--muted)" }}>{s.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {s.items.map((item) => (
                    <li key={item} className="text-xs flex items-center gap-2" style={{ color: "var(--muted)" }}>
                      <span style={{ color: "var(--accent)" }}>&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-bold" style={{ color: "var(--accent-light)" }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── 포트폴리오 ──── */}
      <section id="portfolio" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium mb-2" style={{ color: "var(--accent)" }}>PORTFOLIO</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">제작 사례</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "블루밍 플라워카페",
                tag: "카페",
                desc: "메뉴판, 원데이 클래스 안내, 오시는 길까지 한 페이지에.",
                color: "#e8a0a0",
                bg: "#2a1f1f",
                url: "https://flower-cafe.vercel.app",
              },
              {
                title: "리브 인테리어",
                tag: "인테리어",
                desc: "시공 사례 갤러리, 서비스별 견적 안내, 무료 상담 신청.",
                color: "#c9a96e",
                bg: "#1f1d18",
                url: "https://portfolio-interior.vercel.app",
              },
              {
                title: "소반 한식당",
                tag: "식당",
                desc: "정식/단품 메뉴, 예약 안내, 위치 정보.",
                color: "#c45c4a",
                bg: "#1f1815",
                url: "https://portfolio-restaurant.vercel.app",
              },
              {
                title: "포커스 스터디카페",
                tag: "스터디카페",
                desc: "좌석별 안내, 시간/정기권 요금표, 시설 소개.",
                color: "#3b82f6",
                bg: "#141825",
                url: "https://portfolio-studycafe.vercel.app",
              },
            ].map((p) => (
              <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="card p-6 block hover:scale-[1.02] transition-transform" style={{ background: p.bg }}>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ border: `1px solid ${p.color}30`, color: p.color }}>
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">{p.title}</h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{p.desc}</p>
                <span className="text-xs mt-3 inline-block font-medium hover:underline" style={{ color: p.color }}>
                  사이트 보기 &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ──── 작업 과정 ──── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium mb-2" style={{ color: "var(--accent)" }}>PROCESS</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">이렇게 진행됩니다</h2>

          <div className="space-y-6">
            {[
              { step: "01", title: "상담", desc: "어떤 기능이 필요한지 듣고, 참고 사이트와 예산을 함께 정리합니다." },
              { step: "02", title: "견적 · 기획", desc: "기능 범위, 일정, 비용을 확정합니다. 페이지 구성안을 먼저 보여드립니다." },
              { step: "03", title: "개발", desc: "확정된 내용대로 만듭니다. 중간에 한 번 확인을 거칩니다." },
              { step: "04", title: "배포 · 전달", desc: "실서버에 올리고 도메인을 연결합니다. 수정 2회 포함." },
            ].map((p) => (
              <div key={p.step} className="flex gap-6 items-start">
                <span className="text-2xl font-black shrink-0 w-10" style={{ color: "var(--accent)" }}>{p.step}</span>
                <div className="border-b pb-6 flex-1" style={{ borderColor: "var(--border)" }}>
                  <h3 className="font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── 문의 ──── */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-medium mb-2" style={{ color: "var(--accent)" }}>CONTACT</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">프로젝트 문의</h2>
          <p className="mb-8 leading-relaxed" style={{ color: "var(--muted)" }}>
            만들고 싶은 게 있으시면 편하게 연락주세요.<br />
            간단한 상담은 무료이고, 24시간 내 답변드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://pf.kakao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center"
            >
              카카오톡 문의
            </a>
            <a
              href="mailto:contact@example.com"
              className="inline-block px-8 py-3.5 rounded-xl text-sm font-medium border hover:bg-white/5 transition-colors text-center"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              이메일 문의
            </a>
          </div>

          <p className="text-xs" style={{ color: "var(--muted)" }}>
            기능과 예산을 말씀해주시면 견적을 보내드립니다.
          </p>
        </div>
      </section>

      {/* ──── 푸터 ──── */}
      <footer className="py-8 px-4 text-center border-t" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          &copy; 2026 YW.dev. All rights reserved.
        </p>
      </footer>
    </>
  );
}
