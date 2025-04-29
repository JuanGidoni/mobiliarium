import React, { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";

const HomePage = () => {
  const { data, status, error, loadItems } = useHomePageLogic();

  useEffect(() => {
    loadItems();
  }, []);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h1>All Items</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.codi}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
