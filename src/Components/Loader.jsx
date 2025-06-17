import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { BeatLoader } from "react-spinners";


const Loader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, [location.pathname]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen gap-3">
         <BeatLoader></BeatLoader>


        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Loader;
