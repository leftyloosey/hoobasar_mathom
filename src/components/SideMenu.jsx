// import front_door from '../assets/M/front_door.JPG'
// import u_courtyard from '../assets/M/u_courtyard.JPG'
// import building_side from '../assets/M/building_side.JPG'
// import vent from '../assets/M/vent.JPG'
// import stove from '../assets/M/stove.JPG'

import ModalImage from 'react-modal-image'

const SideMenu = ({ photoRay }) => {
  return (
    <div className='w-96 h-96'>
      {/* <div className='flex flex-row space-x-2 overflow-x-auto overflow-y-hidden no-scrollbar'>
        <div className='basis-48 shrink-0 grow-0 w-96 h-96'>
          <ModalImage small={vent} large={vent} />
        </div>
        <div className='basis-48 shrink-0 grow-0 w-64 h-64'>
          <ModalImage small={building_side} large={building_side} />
        </div>
        <div className='basis-48 shrink-0 grow-0 w-64 h-64'>
          <ModalImage small={front_door} large={front_door} />
        </div>
        <div className='basis-48 shrink-0 grow-0 w-64 h-64'>
          <ModalImage small={u_courtyard} large={u_courtyard} />
        </div>
        <div className='basis-48 shrink-0 grow-0 w-64 h-64'>
          <ModalImage small={stove} large={stove} />
        </div>
      </div> */}
      <div className='flex flex-row space-x-2 overflow-x-auto overflow-y-hidden no-scrollbar'>
        {photoRay.map((photo, index) => (
          <div className='basis-48 shrink-0 grow-0 w-64 h-64' key={index}>
            <ModalImage small={photo} large={photo} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideMenu
