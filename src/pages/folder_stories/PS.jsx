import { PS_abstract } from '../../assets/PS/PS_constants'
import PS_talking from '../../assets/PS/PS_talking.mp3'

import back_door from '../../assets/PS/back_door.jpg'
import blue_front_door from '../../assets/PS/blue_front_door.jpg'
import sky_blue_front from '../../assets/PS/sky_blue_front.jpg'
import shower from '../../assets/PS/shower.jpg'
// import back_door from '../../assets/PS/'

import StoryPage from '../../components/StoryPage'

const photoRay = [back_door, blue_front_door, sky_blue_front, shower]

const PS = () => {
  return (
    <>
      <StoryPage
        abstract={PS_abstract}
        audio={PS_talking}
        photoRay={photoRay}
        // livingRoomPlan={living_room_plan}
      />
    </>
  )
}

export default PS
