import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const CurrentUserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFetch("/User");
  return children;

  useEffect(() => {
    doFetch();
  }, []);
  return children;
};

export default CurrentUserChecker;
