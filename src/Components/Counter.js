import React, { useEffect, useState } from 'react';
import backgroundImage from '../Assets/Images/pattern-bg-3.jpg';

const Counter = () => {
  const counters = [
    { id: 1, logo: '🏆', number: 300, title: 'Finished Projects' },
    { id: 2, logo: '👥', number: 200, title: 'Clients' },
    { id: 3, logo: '🌐', number: 300, title: 'Happy Costumer' },
    { id: 4, logo: '🏅', number: 10, title: 'Years of Experience' },
  ];

  const [counts, setCounts] = useState(counters.map(counter => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => prevCounts.map((count, index) => {
        if (count < counters[index].number) {
          return count + 1;
        } else {
          return count;
        }
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [counters]);

  return (
    
    <div className="relative bg-cover bg-center pt-14 pb-14 mt-16 mb-16 flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, zIndex: 0 }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto md:px-16 px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 z-10">
        {counters.map((counter, index) => (
          <div key={counter.id} className="bg-transparent p-12 text-center border-b-2 border-l-2 border-r-2 border-sky-500 rounded-b-lg"
          style={{ borderTop: '4px solid #0ea5e9' }} >
            <div className="text-4xl mb-4">{counter.logo}</div>
            <div className="text-4xl font-bold mb-4 text-white">{counts[index]}</div>
            <h3 className="text-lg text-white">{counter.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
