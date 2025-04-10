import { useState } from 'react'
import Navbar from '../components/Navbar'
import Modal from '../components/Modal'
import StoryContent from '../data/StoryContent'
import '../styles/Summary.css'

const Summary = () => {
  const [showAbout, setShowAbout] = useState(false)
  const [showMadeBy, setShowMadeBy] = useState(false)

  return (
    <>
      <Navbar
        onOpenAbout={() => setShowAbout(true)}
        onOpenMadeBy={() => setShowMadeBy(true)}
      />
      <div className="summary-container">
        <StoryContent />
      </div>
      {showAbout && (
        <Modal
          title="About"
          content="This is a character review of Sherlock Holmes, from the book A Study in Scarlet."
          onClose={() => setShowAbout(false)}
        />
      )}
      {showMadeBy && (
        <Modal
          title="Made By"
          content="1) Nahaleeka Singha, 2) Siddhant Tripathy, 3) Suhani Mukherjee, 4) Tania Mehti"
          onClose={() => setShowMadeBy(false)}
        />
      )}
    </>
  )
}

export default Summary
