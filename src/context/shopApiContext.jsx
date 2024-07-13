import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ShopApiContext = createContext();

export const ShopApiContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=19b4e5b494374926b9413cc8f40650ad&reverse_sort=false&page=2&size=10&Appid=XCYOB5V63UDEARE&Apikey=a42226f16e8f43f581e7d655b0c0ee2520240712150555269417`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.item);
        setIsLoading(false);
        console.log(result);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ShopApiContext.Provider value={{ data, loading, error }}>
      {children}
    </ShopApiContext.Provider>
  );
};

ShopApiContextProvider.propTypes = {
  children: PropTypes.any,
};
