import api from "..";
import { IStore, IUpdateStore } from "../../@types/store";

export const getAllStore = async () => {
  const res = await api.get(`/store`);

  return res.data.data;
};

export const getStore = async (id: string) => {
  return await api.get(`/store/${id}`);
};

export const createStore = async (req: IStore) => {
  return await api.post(`/store`, req);
};

export const updateStore = async (id: string, req: IUpdateStore) => {
  return await api.put(`/store/${id}`, req);
};

export const deleteStore = async (id: string) => {
  return await api.delete(`/store/${id}`);
};
