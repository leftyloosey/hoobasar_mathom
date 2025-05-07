import { useNavigate } from 'react-router'
import { useInView } from 'react-intersection-observer'

const StoryFrame = ({
  storyID,
  coverStyle,
  abstract,
  coverPhoto,
  el,
  fadeOffElements,
  setFadeOffElements,
}) => {
  const { ref, inView } = useInView({
    rootMargin: '50px 0px -35px 0px',
    threshold: 0.5,
    initialInView: false,
  })
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
      // e.target.style.visibility = 'hidden'
    }, '500')
    setTimeout(() => {
      navigate(`/${e.target.id}`)
    }, '1000')
  }

  return (
    <div
      ref={ref}
      className={`bg-gray-50 flex flex-col duration-500 opacity-0  ${
        fadeOffElements ? '' : ''
      }
        ${inView ? 'opacity-100' : ''}
        }`}
    >
      <div className='flex flex-col justify-center p-1 gap-y-2'>
        <img
          id={storyID}
          onClick={(e) => {
            handleClick(e)
          }}
          style={coverStyle}
          className={`shadow-2xl  ${fadeOffElements ? '' : ''}`}
          src={coverPhoto}
          alt='house front'
        />
        {/* <div className='h-0 invisible w-0' ref={ref}>
          <h2>{`${inView}.`}</h2>
        </div> */}
        <div className=''>
          <div className={` ${fadeOffElements ? '' : ''}`}>
            <p
              ref={el}
              id={storyID}
              className={`bg-black text-white p-4 w-full shadow-md ${
                fadeOffElements ? '' : ''
              }`}
              onClick={(e) => {
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
