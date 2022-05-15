import { useState } from "react"

interface useMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}
type UseMutationResult = [(data:any)=> void, useMutationState];

export default function useMutation(url:string): UseMutationResult {
  const [state, setState] = useState<useMutationState>({
    loading: false,
    data: undefined,
    error: undefined,
  })
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState<undefined | any>(undefined);
  // const [error, setError] = useState<undefined | any>(undefined);

  function mutation(data:any) {
    setState((prev) => ({...prev, loading: true}));
    fetch(url, {
      method: "POST",
      headers: {
        "content-Type" : "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json().catch(() => {}))
    // .then(json => setData(json));
    .then((data) => setState((prev) => ({...prev, data})))
    .catch((error) => setState((prev) => ({...prev, error})))
    .finally(() => setState((prev) => ({...prev, loading: false})))
  }
  return [mutation, {...state}];
}