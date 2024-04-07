import React, { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/97cd3279330bb9161716ba7b/latest/${currency}`
    )
      .then((res) => res.json())
      
      .then((res) => setdata(res['conversion_rates']));
  }, [currency]);
  return data;
};
export default useCurrencyInfo;
