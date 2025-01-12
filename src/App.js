import React, { useState } from 'react'
import Header from './Components/Header';

function App() {
  const [Name, setName] = useState("Shrijit");

  return (
    <>
      <Header user={Name}/>
      <div className="flex items-center justify-center h-screen text-white">
        <h1 className="text-4xl font-bold text-zinc-400">Hello,{Name}</h1>
      </div>
    </>
  );
}

export default App;Header