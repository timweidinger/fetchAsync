import React, { useEffect, useEffect } from "react";

function AsyncCall() {
  const [harmodevs, setHarmodevs] = useState([]);

  useEffect(() => {
    const getDevs = async () => {
      const reply = await fetch("http://localhost:3000/harmodevs");
      const parsedList = await reply.json();
      if (parsedList.length > 0) setHarmodevs(parsedList);
    };

    getDevs();
  }, []);

  return <div>AsyncCall</div>;
}

export default AsyncCall;
