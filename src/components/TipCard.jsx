import React from 'react'

function TipCard() {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg relative ">
      <img className="w-full h-70 object-cover  " src="vite.svg" alt="Meditation" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
        <p className="text-center">Your meditation scheduled</p>
      </div>
    </div>
  )
}

export default TipCard