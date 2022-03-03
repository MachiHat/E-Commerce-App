import React, { useEffect, useState } from "react";

export const ServerR = () => {
    const [Docs, setDocs] = useState()

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((response) => {
        return response.json();
      })
      .then((Docs) => {
        setDocs(Docs);
      });
  }, []);

  return <div>{Docs}</div>;
};

export default ServerR;
