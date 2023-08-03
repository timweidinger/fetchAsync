import React, {useEffect} from 'react';

function VarUrl() {
  const [users, setUsers] = useState([]);
  const url = 'http://localhost:3000/users';

//  useEffect(() => {
    const data = {user: 'test', password: 'test2'}
    fetch('/harmodevs/name', {method: 'POST', body: data})
      .then((res) => res.json())
      .then((list) => setHarmodevs(list));
    //fetch('http://localhost:3000/harmodivs', {method: 'DELETE'})
    //  .then((res) => res.json())
    //  .then((list) => setHarmodevs(list));
    //fetch('http://localhost:3000/cool_stuff', {method: 'GET'})
    //  .then((res) => res.json())
    //  .then((list) => setHarmodevs(list));
    //fetch('http://localhost:3000/cool_stuff', {method: 'POST'})
    //  .then((res) => res.json())
    //  .then((list) => setHarmodevs(list));
    //fetch('http://localhost:3000/harmodevs', {method: 'PUT'})
    //  .then((res) => res.json())
    //  .then((list) => setHarmodevs(list));
//  }, []);

  return <div>VarUrl</div>;
}

export default VarUrl;
