import { useQuery, useQueryClient } from "@tanstack/react-query";
import getArticles from "../lib/getArticles";

const useCachedQuery = (url, keys) => {
    const queryClient = useQueryClient();
    let { isPending, data, error }  = useQuery({
        queryKey: keys,
        queryFn: () => getArticles(url),
        staleTime: 1000 * 60 * 1, // * 1 minute
    });

    return { isPending, data, error }
}

export default useCachedQuery