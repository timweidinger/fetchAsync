import React, {useEffect} from 'react';

function PushCall() {
  const [harmodevs, setHarmodevs] = useState([]);

  useEffect(() => {
    const randomPush = async (data) => {
      data = {
        id: 20,
        title: currentVals[0],
        company: currentVals[1],
        salary: currentVals[2],
      };

      const reply = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });

      randomPush();
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/harmodevs', {
      method: 'PATCH',
      body: {test: '123'},
    })
      .then((res) => res.json())
      .then((list) => setHarmodevs(list));
  }, []);

  return <div>AsyncCall</div>;
}

export default PushCall;
