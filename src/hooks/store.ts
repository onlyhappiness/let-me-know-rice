import { useQuery } from "@tanstack/react-query";
import { getAllStore, getStore } from "../api/apis/store";

export const useGetAllStore = () => {
  return useQuery(["getAllStore"], () => {
    return getAllStore();
  });
};

export const useGetStore = ({ id }: { id: string }) => {
  return useQuery(["getStore", id], () => {
    return getStore(id);
  });
};
