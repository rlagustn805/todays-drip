// import { GoHeartFill } from "react-icons/go";
// import { FaRegCommentDots } from "react-icons/fa";
// import { getComments } from "@/app/service/api";
// import CommentList from "./comment-list";
// import Pagination from "./pagination";
// import CommentPost from "./comment-post";
// import { TodayCommentsType } from "@/types/types";

// export default async function TodayComment({
//   photoId,
//   page,
// }: {
//   photoId: string;
//   page: number;
// }) {
//   const res: TodayCommentsType = await getComments(photoId, page);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <div className="md:col-span-1 rounded-lg border border-gray-300 p-4 bg-white">
//         <div className="flex items-center text-lg gap-2 mb-2">
//           <GoHeartFill color="red" />
//           인기드립 TOP 3
//         </div>

//         <CommentList commentList={res.topComments ?? []} />
//       </div>

//       <div
//         id="comment-section"
//         className="md:col-span-2 rounded-lg border border-gray-300 p-4 bg-white">
//         <div className="flex items-center text-lg gap-2 mb-2">
//           <FaRegCommentDots />
//           실시간 드립 {res.totalCount}
//         </div>
//         <CommentList commentList={res.recentComments ?? []} handle />
//         <Pagination
//           currentPage={res.currentPage ?? 1}
//           totalPages={res.totalPages ?? 1}
//         />
//         <CommentPost />
//       </div>
//     </div>
//   );
// }
