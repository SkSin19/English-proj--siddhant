import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import Summary from './components/Summary'

const App: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false)
  const [showMadeBy, setShowMadeBy] = useState(false)

  return (
    <>
      <Navbar
        onOpenAbout={() => setShowAbout(true)}
        onOpenMadeBy={() => setShowMadeBy(true)}
      />
      <Summary />
      {showAbout && (
        <Modal
          title="About"
          content="This is a Sherlock Holmes inspired interactive story reader built in React + TypeScript."
          onClose={() => setShowAbout(false)}
        />
      )}
      {showMadeBy && (
        <Modal
          title="Made By"
          content="Siddhant Tripathi. Based on stories from A Study in Scarlet to Elementary’s Pilot."
          onClose={() => setShowMadeBy(false)}
        />
      )}
    </>
  )
}

export default App
