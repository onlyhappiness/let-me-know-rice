import api from "..";
import { INotice } from "../../@types/notice";

// 공지사항 보기
export const getNotice = async () => {
  const res = await api.get(`/notice`);

  return res?.data?.data;
};

// 공지사항 등록
export const addNotice = async (req: INotice) => {
  const res = await api.post(`/notice`);

  return res;
};

// 공지사항 상세 보기
export const getNoticeDetail = async (noticeId: number) => {
  const res = await api.get(`/notice/${noticeId}`);

  return res;
};

// 공지사항 수정
export const updateNotice = async ({ noticeId, req }: { noticeId: number; req: INotice }) => {
  const res = await api.put(`/notice/${noticeId}`, req);

  return res;
};

// 공지사항 삭제
export const deleteNotice = async (noticeId: number) => {
  const res = await api.delete(`/notice/${noticeId}`);

  return res;
};
