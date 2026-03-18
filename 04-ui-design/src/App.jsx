import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Card2 from "./components/Card2";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="w-full flex gap-4 p-4 h-[500px]">
        
        {/* Left Side */}
        <div className="w-1/3 h-full bg-amber-200 rounded-3xl p-4">
          <Card2 />
        </div>

        {/* Right Side */}
        <div className="w-2/3 h-full flex gap-4">
          
          <Card
            number={1}
            url="https://images.unsplash.com/photo-1773686044539-c68f2680575a?q=80&w=387"
            text="Card 1 text"
          />

          <Card
            number={2}
            url="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=387"
            text="Card 2 text"
          />

          <Card
            number={3}
            url="https://images.unsplash.com/photo-1493244040629-496f6d136cc3?q=80&w=387"
            text="Card 3 text"
          />

        </div>
      </div>

      {/* Footer */}
      <div className="h-12 bg-white flex justify-center items-center">
        footer
      </div>
    </div>
  );
};

export default App;