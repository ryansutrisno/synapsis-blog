import useSWRInfinite from 'swr/infinite';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const url = process.env.NEXT_PUBLIC_BASE_URL;

export const useRequest = (path) => {
  const PAGE_LIMIT = 20;

  const {data, error, size, setSize, mutate, isValidating, isLoading} =
    useSWRInfinite(
      (index) => `${url}${path}?page=${index + 1}&per_page=${PAGE_LIMIT}`,
      fetcher
    );

  const datas = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

  return {
    datas,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
    mutate,
    isValidating,
    isLoading,
  };
};

export const useRequestDetail = (blogId) => {
  const {
    data: blog,
    error,
    isLoading,
    isValidating,
  } = useSWR(`${url}posts/${blogId}`, fetcher);
  return {blog, error, isLoading, isValidating};
};

export const useRequestComment = (blogId) => {
  const {
    data: comments,
    error,
    isLoading,
    isValidating,
  } = useSWR(`${url}posts/${blogId}/comments`, fetcher);
  return {comments, error, isLoading, isValidating};
};
