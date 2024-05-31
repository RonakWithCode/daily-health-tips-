import React from 'react';

function HomeCategory({ link, name, image }) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg relative">
      <a href={link}>
        <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
          <p className="text-center">{name}</p>
        </div>
      </a>
    </div>
  );
}

export default HomeCategory;
