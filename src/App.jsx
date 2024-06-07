import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen" style={{backgroundColor : color}}>
      <div className='fixed inset-x-0 flex flex-wrap justify-center px-2 text-teal-400 bottom-6'>Tap the button to change the color
      <div className='fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12'>
        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl'>
          <button onClick={() => setColor("red")} className='px-4 py-1 text-white rounded-full shadow-lg outline-none' style={{backgroundColor : "red"}}>Red</button>
          <button onClick={() => setColor("blue")} className='px-4 py-1 text-white rounded-full shadow-lg outline-none' style={{backgroundColor : "blue"}}>Blue</button>
          <button onClick={() => setColor("green")} className='px-4 py-1 text-white rounded-full shadow-lg outline-none' style={{backgroundColor : "green"}}>Green</button>
          <button onClick={() => setColor("yellow")} className='px-4 py-1 text-black rounded-full shadow-lg outline-none' style={{backgroundColor : "yellow"}}>Yellow</button>
          <button onClick={() => setColor("black")} className='px-4 py-1 text-white rounded-full shadow-lg outline-none' style={{backgroundColor : "black"}}>Black</button>
          <button onClick={() => setColor("white")} className='px-4 py-1 text-black rounded-full shadow-lg outline-none' style={{backgroundColor : "white"}}>white</button>
          <button onClick={() => setColor("pink")} className='px-4 py-1 text-white rounded-full shadow-lg outline-none' style={{backgroundColor : "pink"}}>Pink</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App


