

import React from 'react';
import './App.css';
import Card from './Card';

const sampleArray = [
  { id: 1, name: 'aaa', date: 19920527 },
  { id: 2, name: 'bbb', date: 19920528 },
  { id: 3, name: 'ccc', date: 19920529 },
  { id: 4, name: 'ddd', date: 19920531 },
  { id: 5, name: 'eee', date: 19920501 }
];



function App() {
  return (
    <div>

      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>date</th>
        </tr>
      </table>
      {sampleArray.map((data) => {
        console.log(data);
        return <Card name={data.name} date={data.date} key={data.id} id={data.id} />;

      })}
    </div>

  );
}

export default App;
