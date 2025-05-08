import ModalImage from 'react-modal-image'

const SideMenu = ({ photoRay }) => {
  return (
    <div className='flex sm:justify-center'>
      <div className='flex flex-row space-x-2 overflow-x-auto overflow-y-hidden no-scrollbar sm:w-72 '>
        {photoRay.map((photo, index) => (
          <div className='basis-64 shrink-0 items-center flex ' key={index}>
            {/* <div className='basis-48 shrink-0 grow-0' key={index}> */}
            <ModalImage small={photo} large={photo} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideMenu
