import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
//comparar layout com site da ZapYou
const App = () => {

  return (
    <main className="container">
      <Header />
        <Outlet />
    </main>
  )
}

export default App
