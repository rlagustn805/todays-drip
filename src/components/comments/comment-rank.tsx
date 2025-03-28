import { GoHeartFill } from "react-icons/go";
import { CommentType } from "@/types/types";
import CommentCard from "./comment-card";
import Warning from "../common/warning";

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
  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div className="rounded-lg border border-gray-300 p-4">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <GoHeartFill color="red" className="text-lg" />
          <span className="font-bold text-lg">인기 드립</span>
        </div>
        {topComments.length > 0 ? (
          <div className="space-y-4">
            {topComments.map((comment, index) => (
              <div key={comment.id}>
                <span className="text-xl">{medals[index]}</span>
                <CommentCard
                  key={`top-${comment.id}`}
                  comment={comment}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                  bg="bg-gray-200/30"
                />
              </div>
            ))}
          </div>
        ) : (
          <Warning notice="현재 인기 드립이 없어요 ! 도전해보세요 :)" />
        )}
      </div>
    </div>
  );
}
