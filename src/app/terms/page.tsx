export default function Page() {
  return (
    <div className="mt-8 p-4 max-w-3xl mx-auto text-sm leading-relaxed bg-white rounded-lg">
      <h1 className="text-xl font-bold mb-4">서비스 이용약관</h1>
      <p>
        본 약관은 사용자의 권리와 의무를 규정하며, 본 서비스를 이용함으로써 아래
        내용에 동의한 것으로 간주합니다.
      </p>

      <h2 className="mt-6 font-semibold">1. 서비스 개요</h2>
      <p>
        본 서비스는 회원가입 없이 누구나 유머 이미지를 보고 댓글을 남길 수 있는
        오픈 커뮤니티입니다. 작성된 댓글 중 좋아요 수가 가장 많은 댓글은 매일
        오전 9시 기준으로 지난 드립왕으로 선정됩니다.
      </p>

      <h2 className="mt-6 font-semibold">2. 댓글 작성</h2>
      <p>
        - 댓글 작성 시 닉네임, 비밀번호, 내용이 저장되며, 비밀번호는 수정/삭제
        인증을 위해 사용됩니다.
        <br />- 댓글 내용에 대한 책임은 작성자 본인에게 있으며, 서비스는 필요시
        운영 정책에 따라 삭제 또는 비노출 처리할 수 있습니다.
      </p>

      <h2 className="mt-6 font-semibold">3. 댓글 보존 정책</h2>
      <p>
        - 매일 오전 9시 기준으로 인기 댓글 1위를 제외한 나머지 댓글은 모두
        삭제됩니다.
        <br />- 삭제된 댓글은 복구가 불가능하므로 작성 시 유의해 주세요.
      </p>

      <h2 className="mt-6 font-semibold">4. 좋아요 기능</h2>
      <p>
        - 중복 좋아요 방지를 위해 UUID 기반 식별자가 브라우저에 저장되며, 서버에
        해당 UUID 정보가 기록됩니다.
        <br />- 이 정보는 중복 방지 외에는 사용되지 않습니다.
      </p>

      <h2 className="mt-6 font-semibold">5. 면책 조항</h2>
      <p>
        - 본 서비스는 사용자 간의 컨텐츠에 대해 책임을 지지 않으며, 커뮤니티
        내에서 발생하는 문제에 대해 법적 책임을 지지 않습니다.
        <br />- 관련 신고가 접수될 경우 필요한 범위 내에서 임시 조치를 취할 수
        있습니다.
      </p>

      <p className="mt-8 text-xs text-gray-500">최종 수정일: 2025-04-07</p>
    </div>
  );
}
