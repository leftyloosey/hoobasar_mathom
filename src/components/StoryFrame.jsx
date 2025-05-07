import { useNavigate } from 'react-router'

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
      className={`bg-gray-50 flex flex-col duration-500 ${
        fadeOffElements ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className='flex flex-col justify-center p-1 gap-y-9'>
        <img
          id={storyID}
          onClick={(e) => {
            // e.target.style.visibility = 'hidden'
            handleClick(e)
          }}
          style={coverStyle}
          className={`shadow-2xl ${fadeOffElements ? '' : ''}`}
          src={coverPhoto}
          alt='house front'
        />

        <div className=''>
          <div className={` ${fadeOffElements ? '' : ''}`}>
            <p
              ref={el}
              id={storyID}
              className={`bg-black text-white p-4 shadow-md ${
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
