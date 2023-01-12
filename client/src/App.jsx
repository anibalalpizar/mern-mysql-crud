import { Route, Routes } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import TaskForm from './pages/TaskForm'
import NotFound from './pages/NotFound'
import Narbar from './components/Navbar'

function App() {
  return (
    <>
      <Narbar />
      <Routes>
        <Route path='/' element={<TasksPage />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App