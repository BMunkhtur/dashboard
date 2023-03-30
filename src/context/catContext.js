import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [filteredTravel, setFilteredTravel] = useState([]);
  const [travel, setTravel] = useState(null);
  const [render, setRender] = useState(false);

  return (
    <CategoryContext.Provider
      value={{
        setFilteredTravel,
        filteredTravel,
        travel,
        setTravel,
        render,
        setRender,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
