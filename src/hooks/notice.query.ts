import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addNotice,
  deleteNotice,
  getNotice,
  getNoticeDetail,
  updateNotice,
} from "../api/apis/notice";

// 공지사항 보기
export const useNotice = () => {
  return useQuery(["getNotice"], () => {
    return getNotice();
  });
};

// 공지사항 등록
export const useAddNoticeMutation = () => {
  return useMutation(addNotice, {
    onSuccess: (res) => {
      console.log("공지사항 등록 성공");
    },
    onError: (err) => {
      console.log("공지사항 등록 실패");
    },
  });
};

// 공지사항 상세 보기
export const useNoticeDetail = (noticeId: number) => {
  return useQuery(["getNoticeDetail"], () => {
    return getNoticeDetail(noticeId);
  });
};

// 공지사항 수정
export const useUpdateNoticeMutation = () => {
  return useMutation(updateNotice, {
    onSuccess: (res) => {
      console.log("공지사항 수정 성공");
    },
    onError: (err) => {
      console.log("공지사항 수정 실패");
    },
  });
};

// 공지사항 삭제
export const useDeleteNoticeMutation = () => {
  return useMutation(deleteNotice, {
    onSuccess: (res) => {
      console.log("공지사항 수정 성공");
    },
    onError: (err) => {
      console.log("공지사항 수정 실패");
    },
  });
};
