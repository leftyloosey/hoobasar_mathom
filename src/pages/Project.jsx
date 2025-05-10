import {
  kateBiography,
  jessBiography,
  projectDescription,
} from '../assets/project/biographies'
import katePicture from '../assets/project/kate.jpg'
import jessPicture from '../assets/project/jess_d.png'
import chrisPicture from '../assets/project/chris.jpg'

const Project = () => {
  // const style = { paddingTop: '1px' }
  const style2 = { height: '300px' }
  // const fade = 'abstract-fade'

  const BioTile = ({ picture, biography, style, fade }) => {
    return (
      <div className='w-72 -ml-36 mb-2'>
        <div
          className={`flex flex-col justify-center mt-4 ${fade ? fade : ''}`}
        >
          <div className='w-full'>
            <img
              style={style}
              className='h-auto w-64 shadow-md grayscale mb-6'
              src={picture}
              alt='picture of team member'
            />
          </div>

          <p className='w-full p-'>{biography}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='ml-8 mt-8 pb-4  w-screen'>
      <div className='flex -ml-8  flex-col'>
        <div className='flex justify-center w-full shortest-abstract-fade mb-4'>
          {/* <span className='text-2xl font-bold'>The Project</span> */}
          <p className='pl-2 w-4/6'>{projectDescription}</p>
        </div>

        <div className='w-screen flex justify-end mt-1'>
          {/* <div className='justify-end'> */}
          <div className='flex flex-row justify-evenly w-[82.5vw] bg-blue-400 abstract-fade'>
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
                biography={jessBiography}
                style={style2}
                fade={'abstract-fade'}
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Project
