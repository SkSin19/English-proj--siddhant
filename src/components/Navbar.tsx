import React from 'react'
import '../styles/Navbar.css'

interface Props {
  onOpenAbout: () => void
  onOpenMadeBy: () => void
}

const Navbar: React.FC<Props> = ({ onOpenAbout, onOpenMadeBy }) => (
  <div className="navbar">
    <div className="navbar-title">English Project</div>
    <div className="navbar-buttons">
      <button onClick={onOpenAbout}>About</button>
      <button onClick={onOpenMadeBy}>Made By</button>
    </div>
  </div>
)

export default Navbar
