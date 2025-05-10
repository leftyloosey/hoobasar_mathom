import {
  kateBiography,
  jessBiography,
  chrisBiography,
  projectDescription,
} from '../assets/project/biographies'
import katePicture from '../assets/project/kate.jpg'
import jessPicture from '../assets/project/jess_d.png'
import chrisPicture from '../assets/project/chris.jpg'

const Project = () => {
  // const style = { paddingTop: '1px' }
  const style2 = { height: '256px' }
  // const fade = 'abstract-fade'

  const BioTile = ({ picture, biography, style, fade }) => {
    return (
      <div className='w-80 ml-6 md:-ml-36 -translate-y-4 md:mb-2 md:-translate-x-2'>
        <div
          className={`flex flex-col justify-center w-ful mt-4 ${
            fade ? fade : ''
          }`}
        >
          <div className='w-'>
            <img
              style={style}
              className='h-64 w-64 shadow-md grayscale mb-6'
              src={picture}
              alt='picture of team member'
            />
          </div>

          <p className='w-full'>{biography}</p>
        </div>
      </div>
    )
  }

  return (
    <div className=''>
      {/* <div className='ml-4 mt-8 pb-4 w-screen overflow-x-hiddn bg-white'> */}
      <div className=''>
        {/* <div className='flex -ml- flex-col bg-white'> */}
        <div className='w-full flex'>
          <div className=''>
            {/* <div className='flex justify-center w-screen shortest-abstract-fade'> */}
            <div className='flex flex-row'>
              <span className='text-2xl font-bold absolute top-32 -left-4.5 rotate-270 text-nowrap md:translate-x-40'>
                The Project
              </span>
              <div className='flex justify-end'>
                <p className='flex flex-row w-5/6 justify-end mt-4 mr-0.5 md:mb-3'>
                  {/* <p className='-ml-40 md:-ml-30 md:mb-4 w-[85vw] md:w-[72vw]'> */}
                  {projectDescription}
                </p>
              </div>
            </div>
            <span className='text-4xl md:hidden flex flex-row justify-end'>
              {/* <span className=' text-4xl md:hidden flex flex-row'> */}
              Team <span className='pt-0.5'>&#8627;</span>
            </span>
          </div>
        </div>

        <div className='flex justify-end '>
          {/* <div className='w-screen flex justify-end md:-ml-48 '> */}
          <div className='flex flex-row bg-blue-400 abstract-fade overflow-x-auto overflow-y-hidden no-scrollbar md:justify-en md:w-[87vw]'>
            {/* <div className='flex flex-row justify-evenly gap-x- w-[90vw] md:w-[82.5vw] md:pl-5 bg-blue-400 abstract-fade overflow-x-auto overflow-y-hidden no-scrollbar'> */}
            <div className='flex md:ml-44 md:justify-evenly md:gap-x-44'>
              <div className='mt-6'>
                <BioTile
                  picture={katePicture}
                  biography={kateBiography}
                  fade={'short-abstract-fade'}
                />
              </div>
              <div className='mt-6'>
                <BioTile
                  picture={jessPicture}
                  biography={jessBiography}
                  // style={style}
                  fade={'abstract-fade'}
                />
              </div>
              <div className='mt-6'>
                <BioTile
                  picture={chrisPicture}
                  biography={chrisBiography}
                  style={style2}
                  fade={'abstract-fade'}
                />
              </div>
            </div>
            {/* <div className='w-32'>.</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
