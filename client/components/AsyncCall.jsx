import React, { useEffect } from "react";

function AsyncCall() {
  const [harmodevs, setHarmodevs] = useState([]);

  useEffect(() => {
    const getDevs = async () => {
      const reply = await fetch("http://localhost:3000/harmodevs");
      const parsedList = await reply.json();
      if (parsedList.length > 0) setHarmodevs(parsedList);
    };

    const getCoolStuff = async () => {
      const reply = await fetch("http://localhost:3000/cool_stuff");
      const parsedList2 = await reply.json();
      if (parsedList2.length > 0) console.log(parsedList2);
    };

    getDevs();
    getCoolStuff();
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/harmodevious")
      .then((res) => res.json())
      .then((list) => setHarmodevs(list));
  }, []);

  return <div>AsyncCall</div>;
}

export default AsyncCall;
