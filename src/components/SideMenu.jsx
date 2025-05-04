import ModalImage from 'react-modal-image'

const SideMenu = ({ photoRay }) => {
  return (
    <div className='w-96 h-96 mt-8'>
      <div className='flex flex-row space-x-2 overflow-x-auto overflow-y-hidden no-scrollbar'>
        {photoRay.map((photo, index) => (
          <div className='basis-48 shrink-0 grow-0' key={index}>
            <ModalImage small={photo} large={photo} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideMenu
