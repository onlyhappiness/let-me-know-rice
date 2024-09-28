import { QueryKey, useQueryClient } from "@tanstack/react-query";

const useFetchQuery = (name: QueryKey) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(name);
};

export default useFetchQuery;
