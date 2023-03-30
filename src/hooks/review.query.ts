import { useQuery } from "@tanstack/react-query";
import { getReview } from "../api/apis/review";

// 리뷰 보기
export const useReview = () => {
  return useQuery(["getReview"], () => {
    return getReview();
  });
};
