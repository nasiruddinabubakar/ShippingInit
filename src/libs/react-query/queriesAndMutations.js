import { getAllCountries, getOrders } from "./api";
import {useQuery,useQueryClient} from '@tanstack/react-query';
import { QUERY_KEYS } from "./queryKeys";


export const useOrders = () => {
   
    return useQuery({
        queryKey:['ORDERS'],
        queryFn:getOrders,
        staleTime:Infinity,
    });
}
export const useCountries = () => {
    return useQuery({
        queryKey:['COUNTRIES'],
        queryFn:getAllCountries,
        staleTime:Infinity,
    });
}