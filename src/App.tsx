import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Login</div>} />
        <Route path="/cadastro" element={<div>Cadastro</div>} />
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/leads" element={<div>Leads</div>} />
        <Route path="/perfil" element={<div>Perfil</div>} />
      </Routes>
    </Router>
  )
}

export default App
