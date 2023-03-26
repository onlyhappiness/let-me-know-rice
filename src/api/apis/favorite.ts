import api from "..";
import { IFavorite } from "../../@types/favorite";

//
export const getAllFavorite = () => {
  const res = api.get(`/favorite`);

  return res;
};

export const getFavorite = (id: string) => {
  const res = api.get(`/favorite/${id}`);

  return res;
};

export const addFavorite = async (req: IFavorite) => {
  const res = await api.post(`/favorite`, req);

  return res;
};

export const updateFavorite = async (id: string) => {
  const res = await api.put(`/favorite/${id}`);

  return res;
};

export const deleteFavorite = async (id: string) => {
  const res = await api.delete(`/favorite/${id}`);

  return res;
};
