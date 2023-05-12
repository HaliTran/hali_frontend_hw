import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://thronesapi.com/api/v2/Characters'
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <Navbar character={data} />;
}
