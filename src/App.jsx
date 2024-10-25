import "./layout/layout.scss"
import Navbar from "./componants/navbar/navbar.jsx"
import HomePage from "./routes/home/homePage.jsx"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
         <Navbar/>
      </div>
      <div className="content">
         <HomePage/>
      </div>
    </div>
  )
}

export default App