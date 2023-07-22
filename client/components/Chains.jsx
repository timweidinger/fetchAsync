import React, { useEffect } from "react";

function Chains() {
  const [cool_stuff, setCool_Stuff] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cool_stuff")
      .then((res) => res.json())
      .then((list) => setHarmodevs(list));
  }, []);

  return <div>Chains</div>;
}

export default Chains;
