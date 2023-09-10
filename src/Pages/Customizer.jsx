import React, { useState } from 'react'
import config from "../config/config"
import state from '../Store'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { fadeAnimation, slideAnimation } from '../config/motion'
import {EditorTabs, FilterTabs} from "../config/constants"
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../Components'


const Customizer = () => {
  const snap =useSnapshot(state)

  const [activeEditorTab, setActiveEditorTab] = useState("")


  // show tab content depending on the active tab
  const generateTabContent = () => {
  switch (activeEditorTab) {
    case "colorpicker": return <ColorPicker/>

    case "filepicker": return <FilePicker
    />

    case "aipicker": return <AIPicker/> 
  
  }
  }

  return (
   <AnimatePresence>
{!snap.intro && (
  <>
  <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation("left")}>
    <div className='flex items-center min-h-screen'>
      <div className="editortabs-container tabs">
        {EditorTabs.map((tab)=> (
          <Tab 
          key={tab} 
          {...tab}
          handleClick={() => setActiveEditorTab(tab.name)}/>
        ))}
        {generateTabContent()}
      </div>
    </div>
  </motion.div>

  <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
    <CustomButton 
    type="filled"
    title="Go Back"
    handleClick={() => state.intro = true}
    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
    />
  </motion.div>

  <motion.div className='filtertabs-container' {...slideAnimation("up")}>
  {FilterTabs.map((tab)=> (
          <Tab 
          key={tab.name}
          tab={tab}
          isfilterTab
          isActiveTab=""
          handleClick={() => {}}/>
        ))}
  </motion.div>
  </>
)}
   </AnimatePresence>
  )
}

export default Customizer