import api from "..";
import { IReview } from "../../@types/review";

// 리뷰 보기
export const getReview = async () => {
  const res = await api.get(`/review`);

  return res?.data?.data;
};

// 리뷰 생성
export const addReview = async (req: IReview) => {
  const res = await api.post(`/review`, req);

  return res;
};

// 리뷰 상세
export const getReviewDetail = async (reviewId: number) => {
  const res = await api.get(`/review/${reviewId}`);

  return res;
};

// 리뷰 수정
export const updateReview = async ({ reviewId, req }: { reviewId: number; req: IReview }) => {
  const res = await api.put(`/review/${reviewId}`, req);

  return res;
};
