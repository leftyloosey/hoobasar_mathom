import { useRef, useState, useEffect } from 'react'
import { useOutletContext } from 'react-router'

import StoryFrame from '../components/StoryFrame.jsx'

const Stories = () => {
  const [fadeOffElements, setFadeOffElements] = useState(false)
  const [storyLoad, setStoryLoad] = useOutletContext()
  console.log(storyLoad)
  const el = useRef(null)
  const el2 = useRef(null)
  useEffect(() => {
    setStoryLoad(true)

    return () => {
      setStoryLoad(false)
    }
  }, [setStoryLoad])

  return (
    <div
    // onLoad={() => {
    //   setStoryLoad(true)
    //   console.log(storyLoad)
    // }}
    >
      <StoryFrame
        el={el}
        el2={el2}
        fadeOffElements={fadeOffElements}
        setFadeOffElements={setFadeOffElements}
      />
      <StoryFrame
        el={el}
        el2={el2}
        fadeOffElements={fadeOffElements}
        setFadeOffElements={setFadeOffElements}
      />
    </div>
  )
}

export default Stories
