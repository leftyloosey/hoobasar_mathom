import { PS_abstract } from '../../assets/PS/PS_constants'
import PS_talking from '../../assets/PS/PS_talking.mp3'

import back_door from '../../assets/PS/back_door.JPG'
import blue_front_door from '../../assets/PS/blue_front_door.JPG'
import sky_blue_front from '../../assets/PS/sky_blue_front.JPG'
import shower from '../../assets/PS/shower.JPG'

import StoryPage from '../../components/StoryPage'

const photoRay = [sky_blue_front, back_door, blue_front_door, shower]

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
