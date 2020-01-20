import { useState } from "react";

export default url => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setReponse] = useState(null);
  const [error, setError] = useState(null);

  const doFetch = () => {
 if (!isSubmitting) {
        return;
      }
      axios("https://conduit.productionready.io/api/users/login", {
        method: "post",
        body: {
          user: {
            email: "dddd",
            password: "ddd"
          }
        }
      })
        .then(res => {
          console.log("res", res);
          setIsSubmitting(false);
        })
        .catch(error => {
          console.log("error", error);
          setIsSubmitting(false);
        });
    });
  };
  return {{isLoading, response, error}, doFetch}
};
