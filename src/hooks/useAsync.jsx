import axios from "axios";
// import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

const useAsync = (asyncFunction) => {
  const [data, setData] = useState([] || {});
  const [headers, setHeaders] = useState({} || []);
  const [error, setError] = useState("");
  // const [errCode, setErrCode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    console.log("unmounted", unmounted);
    let source = axios.CancelToken.source();
    (async () => {
      try {
        const res = await asyncFunction({ cancelToken: source.token });
        if (!unmounted) {
          setData(res.data);
          setError("");
          setLoading(false);
          setHeaders(res.headers);
        }
      } catch (err) {
        if (!unmounted) {
          setError(err.message);
          if (axios.isCancel(err)) {
            setError(err.message);
            setLoading(false);
            setData([]);
          } else {
            setError(err.message);
            setLoading(false);
            setData([]);
          }
        }
      }
    })();

    return () => {
      unmounted = true;
      source.cancel("Cancelled in cleanup");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    error,
    loading,
    headers,
  };
};

export default useAsync;
