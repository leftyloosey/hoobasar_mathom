import { useNavigate } from 'react-router'

// import JO_abstract from '../assets/JO/JO_abstract.js'
// import house_front from '../assets/JO/house_front.JPG'
// import M_abstract from '../assets/JO/JO_abstract.js'
// import building_side from '../assets/M/building_side.JPG'
// import front_door from '../assets/JO/front_door.JPG'

const StoryFrame = ({
  storyID,
  coverStyle,
  abstract,
  coverPhoto,
  el,
  fadeOffElements,
  setFadeOffElements,
}) => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
      setFadeOffElements(true)
      e.target.style.visibility = 'hidden'
    }, '500')
    setTimeout(() => {
      navigate(`/${e.target.id}`)
    }, '1000')
  }
  return (
    <div
      className={`bg-gray-50 mt-5 ml-5 mr-5 abstract-fade duration-200 z-40 transition-all ${
        // fadeOffElements ? '' : ''
        fadeOffElements ? 'opacity-0 ' : 'opacity-100'
      }`}
    >
      <div className='p-4 flex flex-col md:flex-row '>
        <img
          id={storyID}
          onClick={(e) => {
            // e.target.style.visibility = 'hidden'
            handleClick(e)
          }}
          style={coverStyle}
          className={`p-2 shadow-2xl ${fadeOffElements ? '' : ''}`}
          src={coverPhoto}
          alt='house front'
        />

        <div className='flex justify-center'>
          <div className={` ${fadeOffElements ? '' : ''}`}>
            <p
              ref={el}
              id={storyID}
              className={`md:mt-16 md:ml-16 p-1 bg-black text-white w-80 md:w-66 shadow-md ${
                fadeOffElements ? '' : ''
              }`}
              onClick={(e) => {
                // e.target.style.visibility = 'hidden'
                handleClick(e)
              }}
            >
              {abstract}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryFrame
