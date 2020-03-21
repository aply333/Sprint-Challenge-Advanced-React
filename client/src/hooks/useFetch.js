import { useState, useEffect } from "react";

export const useFetch = (api, consoleError) => {
  const [dataCatch, setDataCatch] = useState([]);
  const gather = () => {
    fetch(api)
      .then(res => res.json())
      .then(data => setDataCatch(data))
      .catch(err => console.log("%c ERROR", "color:red", consoleError, err));
  };
  useEffect(gather, []);

  return dataCatch;
};
