import { useNavigate } from 'react-router'
import { useInView } from 'react-intersection-observer'

const StoryFrame = ({
  storyID,
  coverStyle,
  abstract,
  coverPhoto,
  // el,
  // fadeOffElements,
  // setFadeOffElements,
}) => {
  const { ref, inView } = useInView({
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.4,
    initialInView: false,
  })
  const nullStyle = {
    backgroundColor: 'white',
  }

  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
      // setFadeOffElements(true)
      // e.target.style.visibility = 'hidden'
    }, '400')
    setTimeout(() => {
      navigate(`/${e.target.id}`)
    }, '1000')
  }

  return (
    <div
      ref={ref}
      className={`bg-gray-50 flex flex-col duration-500 opacity-0 abstract-fade  
        ${inView ? 'opacity-100' : ''}
        }`}
    >
      <div className='flex flex-col md:flex-row md:gap-x-12 lg:gap-x-32 sm:items-center justify-center p-1 gap-y-2'>
        <img
          id={storyID}
          onClick={(e) => {
            handleClick(e)
          }}
          style={coverStyle ? coverStyle : nullStyle}
          className='shadow-2xl h-72 w-auto'
          src={coverPhoto}
          alt='house front'
        />

        {/* <div className=''> */}
        <div>
          <p
            id={storyID}
            className='bg-black text-white p-4 w-full shadow-md'
            onClick={(e) => {
              handleClick(e)
            }}
          >
            {abstract}
          </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default StoryFrame
