import React, { useState } from 'react';
import HomeCategory from '../components/HomeCategory';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Optional CSS import for calendar styling
import dailyTips from '../utils/dailyTips'; // Adjust the path according to your project structure

const categories = [
  {
    link: '/meditation',
    name: 'Your meditation scheduled',
    image: 'meditation.jpg', // Replace with the correct image path
  },
  {
    link: '/exercises',
    name: 'Your daily exercises',
    image: 'exercises.jpg', // Replace with the correct image path
  },
  {
    link: '/nutrition',
    name: 'Nutrition plan',
    image: 'nutrition.jpg', // Replace with the correct image path
  },
  {
    link: '/health-checkup',
    name: 'Health checkup',
    image: 'health-checkup.jpg', // Replace with the correct image path
  },
  {
    link: '/fitness',
    name: 'Fitness routine',
    image: 'fitness.jpg', // Replace with the correct image path
  },
  {
    link: '/diet',
    name: 'Diet plan',
    image: 'diet.jpg', // Replace with the correct image path
  },
];



function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formattedDate = formatDate(selectedDate);
  const tips = dailyTips[formattedDate] || [];

  return (
    <main className="p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">Health Tips</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <HomeCategory
                key={index}
                link={category.link}
                name={category.name}
                image={category.image}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">Get Daily Health Tips</h2>
          <div className="bg-white rounded-xl shadow-lg p-4">
            <Calendar 
              onChange={setSelectedDate} 
              value={selectedDate}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">Tips for {formattedDate}</h3>
            <ul className="list-disc list-inside">
              {tips.length > 0 ? (
                tips.map((tip, index) => (
                  <li key={index} className="text-gray-700">{tip}</li>
                ))
              ) : (
                <li className="text-gray-500">No tips available for this date.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
