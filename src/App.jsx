import { useState } from 'react'
import Home from './pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-amber-400'>
     <Home/>
      </div>
    </>
  );
}

export default App
