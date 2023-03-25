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

export const addFavorite = (req: IFavorite) => {
  const res = api.post(`/favorite`);

  return res;
};

export const updateFavorite = (id: string) => {
  const res = api.put(`/favorite/${id}`);

  return res;
};

export const deleteFavorite = (id: string) => {
  const res = api.delete(`/favorite/${id}`);

  return res;
};
