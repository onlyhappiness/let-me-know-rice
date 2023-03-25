import { useMutation, useQuery } from "@tanstack/react-query";
import { addFavorite, getAllFavorite, getFavorite } from "../api/apis/favorite";

export const useGetAllFavorite = () => {
  return useQuery(["getAllFavorite"], () => {
    return getAllFavorite;
  });
};

export const useGetFavorite = ({ id }: { id: string }) => {
  return useQuery(["getFavorite", id], () => {
    return getFavorite(id);
  });
};

export const useAddFavorite = () => {
  return useMutation(addFavorite, {
    onSuccess(res) {
      console.log("res:", res);
    },
    onError(err) {
      console.log("err: ", err);
    },
  });
};
