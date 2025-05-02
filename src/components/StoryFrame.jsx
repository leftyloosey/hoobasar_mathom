import { useNavigate } from 'react-router'

// import JO_abstract from '../assets/JO/JO_abstract.js'
// import house_front from '../assets/JO/house_front.JPG'
// import M_abstract from '../assets/JO/JO_abstract.js'
// import building_side from '../assets/M/building_side.JPG'
// import front_door from '../assets/JO/front_door.JPG'

const StoryFrame = ({
  coverStyle,
  abstract,
  coverPhoto,
  el,
  fadeOffElements,
  setFadeOffElements,
}) => {
  let navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
      setFadeOffElements(true)
    }, '150')
    setTimeout(() => {
      navigate(`/${e.target.id}`)
    }, '600')
  }
  return (
    <div className={`flex flex-co  bg${fadeOffElements ? '' : ''}`}>
      <div className='flex flex-col z-50 '>
        <img
          style={coverStyle}
          className={`w-32 h-64 translate-x-64 ${fadeOffElements ? '' : ''}`}
          src={coverPhoto}
          alt='house front'
        />

        <div className='flex w-full '>
          <div className={` ${fadeOffElements ? '' : ''}`}>
            {/* <img
            className={`w-32 h-32  ${fadeOffElements ? '' : ''}`}
            src={house_front}
            alt='house front'
          /> */}
            <p
              ref={el}
              id='jo'
              className={`bg-white ${fadeOffElements ? '' : ''}`}
              onClick={(e) => {
                e.target.style.visibility = 'hidden'
                handleClick(e)
              }}
            >
              {abstract}
            </p>
          </div>
        </div>
      </div>
      <div className='w-1/2 h-32 opacity-10 bg-slate-300 absolute left-64 top-64 '></div>
    </div>
  )
}
//   return (
//     <div
//       className={`bg-white border-solid transition-all md:duration-400 ${
//         fadeOffElements
//           ? 'h-[50vh] md:h-[80vh] border-l-32 border-r-32 '
//           : 'h-full border-l-96 border-r-96 border-t-32'
//       }`}
//     >
//       <div className='flex flex-col gap-x-2 md:gap-y-36'>
//         <div
//           className={`bg-whie flex flex-col md:flex-row md:justify-center md:gap-x-32 border-black border-solid duration-400 ${
//             fadeOffElements ? 'border-b-0' : 'border-b-32'
//           }`}
//         >
//           <img
//             className={`md:w-44 md:h-72 transition-all md:duration-700 border-8 border-solid border-black shadow-2xl  ${
//               fadeOffElements ? '-translate-y-64 opacity-0' : 'opacity-100'
//             }`}
//             src={house_front}
//             alt='house front'
//           />
//           <p
//             ref={el}
//             id='jo'
//             className={`bg-white w-64 md:w-96 md:h-64 md:duration-700 shadow-2xl ${
//               fadeOffElements ? 'mdtranslate-x-64 opacity-0' : 'opacity-100'
//             }`}
//             onClick={(e) => {
//               e.target.style.visibility = 'hidden'
//               handleClick(e)
//             }}
//           >
//             {JO_abstract}
//           </p>
//         </div>

//         <div className='flex flex-col md:flex-row justify-center md:gap-x-32'>
//           <img
//             className={`md:w-44 md:h-72 md:duration-700 border-8 border-solid border-black shadow-2xl ${
//               fadeOffElements ? 'translate-y-64 opacity-0' : 'opacity-100'
//             }`}
//             src={front_door}
//             alt='front door'
//           />
//           <p
//             ref={el2}
//             id='jo'
//             className={`bg-white w-72 md:w-96 md:h-64 md:duration-700 shadow-2xl ${
//               fadeOffElements ? '-translate-x-64 opacity-0' : 'opacity-100'
//             }`}
//             onClick={(e) => {
//               e.target.style.visibility = 'hidden'
//               handleClick(e)
//             }}
//           >
//             {JO_abstract}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

export default StoryFrame
