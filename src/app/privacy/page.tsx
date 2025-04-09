export default function Page() {
  return (
    <div className="mt-8 p-4 max-w-3xl mx-auto text-sm leading-relaxed bg-white rounded-lg">
      <h1 className="text-xl font-bold mb-4">개인정보 처리방침</h1>
      <p>
        본 서비스는 비회원 기반 유머 커뮤니티로, 최소한의 정보만을 처리하며
        아래와 같이 개인정보를 보호합니다.
      </p>

      <h2 className="mt-6 font-semibold">1. 수집하는 정보</h2>
      <p>
        - 댓글 작성 시: 닉네임, 비밀번호(해시처리), 댓글 내용
        <br />- 좋아요 기능 이용 시: 브라우저에 저장된 UUID (쿠키 기반 식별자)
      </p>

      <h2 className="mt-6 font-semibold">2. 이용 목적</h2>
      <p>
        - 댓글 정보는 서비스 내 표시 및 수정/삭제 검증 용도로만 사용됩니다.
        <br />- 좋아요 식별자(UUID)는 중복 좋아요 방지 목적으로만 사용되며, 그
        외 마케팅/추적 목적으로는 이용되지 않습니다.
      </p>

      <h2 className="mt-6 font-semibold">3. 보유 및 파기</h2>
      <p>
        - 댓글은 매일 오전 9시, 인기 댓글 1등을 제외한 모든 댓글이 자동
        삭제됩니다.
        <br />- 쿠키 기반 UUID 정보는 브라우저 설정 또는 정책에 따라 만료되거나
        삭제될 수 있으며, 서버 측 데이터도 주기적으로 정리됩니다.
      </p>

      <h2 className="mt-6 font-semibold">4. 기타</h2>
      <p>
        - 본 서비스는 실명 인증 없이 사용할 수 있는 비회원 기반 서비스입니다.
        <br />- 사용자가 입력한 정보 외에 IP 등 개인정보는 수집하지 않으며,
        UUID는 익명성 기반으로만 활용됩니다.
      </p>

      <p className="mt-8 text-xs text-gray-500">최종 수정일: 2025-04-07</p>
    </div>
  );
}
