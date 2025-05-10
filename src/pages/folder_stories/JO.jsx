import StoryPage from '../../components/StoryPage.jsx'

import JO_talking from '../../assets/JO/JO_talking.wav'
import { JO_abstract } from '../../assets/JO/JO_constants.js'

import front_door from '../../assets/JO/front_door.JPG'
import suburb from '../../assets/JO/suburb1.JPG'
import house_front from '../../assets/JO/house_front.JPG'
import kitchen_table from '../../assets/JO/kitchen_table.JPG'
import living_room_plan from '../../assets/JO/living_room_plan.jpg'

const photoRay = [
  // living_room_plan,
  front_door,
  house_front,
  suburb,
  kitchen_table,
]

const TryJH = () => {
  return (
    <>
      <StoryPage
        abstract={JO_abstract}
        audio={JO_talking}
        photoRay={photoRay}
        livingRoomPlan={living_room_plan}
      />
    </>
  )
}

export default TryJH
