import './App.css';
import { CalendarContainer, ModalManager, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <ModalManager />
      <Navbar />
      <CalendarContainer />
    </div>
  )
}

export default App
