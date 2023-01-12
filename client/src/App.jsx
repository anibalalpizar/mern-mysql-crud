import { Route, Routes } from 'react-router-dom'
import { TaskContextProvider } from './context/TaskProvider'
import TasksPage from './pages/TasksPage'
import TaskForm from './pages/TaskForm'
import NotFound from './pages/NotFound'
import Narbar from './components/Navbar'

function App() {
  return (
    <TaskContextProvider>
      <Narbar />
      <Routes>
        <Route path='/' element={<TasksPage />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  )
}

export default App