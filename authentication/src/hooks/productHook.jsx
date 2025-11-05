import { useQuery } from "@tanstack/react-query";
import { getProductData } from "../apis/productApis";

export const fetchProductDataHook = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: getProductData,
  });
};
