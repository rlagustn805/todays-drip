import { GoHeartFill } from "react-icons/go";
import { CommentType } from "@/types/types";
import CommentCard from "./comment-card";

type Props = {
  topComments: CommentType[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, newContent: string) => void;
};

export default function CommentRank({
  topComments,
  onDelete,
  onUpdate,
}: Props) {
  return (
    <div className="rounded-lg border border-gray-300 p-4">
      {topComments.length > 0 ? (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <GoHeartFill color="red" className="inline text-lg" />
            <span className="font-bold- text-lg">인기 댓글</span>
          </div>
          <div className="space-y-4">
            {topComments.map((comment) => (
              <CommentCard
                key={`top-${comment.id}`}
                comment={comment}
                onDelete={onDelete}
                onUpdate={onUpdate}
                bg="bg-gray-200/30"
              />
            ))}
          </div>
        </div>
      ) : (
        <div>인기 댓글 도전 - 임시</div>
      )}
    </div>
  );
}
