import React, { useState, useEffect } from 'react';
import { getTips } from '../utils/api';

function Tips() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setTips(getTips());
  }, []);

  return (
    <main className="p-4">
      <h1>Daily Health Tips</h1>
      <ul>
        {tips.map((tip) => (
          <li key={tip.id}>{tip.text}</li>
        ))}
      </ul>
    </main>
  );
}

export default Tips