import { useState } from "react";

export default url => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setReponse] = useState(null);
  const [error, setError] = useState(null);

  const doFetch = () => {
    return [{ isLoading, response, error }, doFetch];
  };
};
