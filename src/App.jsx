import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Edit_meme from './Pages/Edit_meme'

const App = () => {
  return (
    <div>
      <h2 className='w-full text-center py-3 border-b-4 border-t-4 mt-1'>memeStack | Make Your Meme</h2>
      <Routes>
        <Route path='/memeStack/' element={<Home />} />
        <Route path='/memeStack/edit/' element={<Edit_meme />} />
      </Routes>
    </div>
  )
}

export default App