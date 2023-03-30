import api from "..";
import { IFavorite } from "../../@types/favorite";

// 찜한 상품 보기
export const getAllFavorite = () => {
  const res = api.get(`/favorite`);

  return res;
};

// 찜하기
export const addFavorite = async (req: IFavorite) => {
  const res = await api.post(`/favorite`, req);

  return res;
};

// 찜한 상품 상세
export const getFavorite = (id: string) => {
  const res = api.get(`/favorite/${id}`);

  return res;
};

// 찜한 상품 수정
export const updateFavorite = async (id: string) => {
  const res = await api.put(`/favorite/${id}`);

  return res;
};

// 찜한 상품 삭제
export const deleteFavorite = async (id: string) => {
  const res = await api.delete(`/favorite/${id}`);

  return res;
};
