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
  const InView = () => {
    const { ref, inView } = useInView({
      rootMargin: '-10px 0px -50px 0px',
      // rootMargin: '100% 0% -30% 0%',

      threshold: 0.4,
      initialInView: true,
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
        e.target.style.visibility = 'hidden'
      }, '500')
      setTimeout(() => {
        navigate(`/${e.target.id}`)
      }, '1000')
    }

    return (
      <div
        ref={ref}
        className={`bg-gray-50 flex flex-col duration-500 opacity-0 mt-4 ${
          fadeOffElements ? '' : ''
          // fadeOffElements ? 'opacity-0' : 'opacity-100'
        }
        ${inView ? 'opacity-100' : ''}
        }`}
      >
        <div className='flex flex-col justify-center p-1 gap-y-4'>
          <img
            id={storyID}
            onClick={(e) => {
              // e.target.style.visibility = 'hidden'
              handleClick(e)
            }}
            style={coverStyle}
            className={`shadow-2xl  ${fadeOffElements ? '' : ''}`}
            src={coverPhoto}
            alt='house front'
          />

          <div className=''>
            <div className={` ${fadeOffElements ? '' : ''}`}>
              <p
                ref={el}
                id={storyID}
                className={`bg-black text-white p-4 w-full shadow-md ${
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
  return (
    <>
      <InView />
    </>
  )
}

export default StoryFrame
