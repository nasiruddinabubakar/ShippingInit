import { getOrders } from "./api";
import {useQuery,useQueryClient} from '@tanstack/react-query';
import { QUERY_KEYS } from "./queryKeys";


export const useOrders = () => {
    const queryClient = useQueryClient();
    return useQuery({
        queryKey:['ORDERS'],
        queryFn:getOrders,
        staleTime:Infinity,
    });
}