import { B_abstract, B_cover_style } from '../../assets/B/B_constants'
import B_talking from '../../assets/B/B_talking.mp3'

import christmas_tree from '../../assets/B/christmas_tree.JPG'
import couch_tree from '../../assets/B/couch_tree.JPG'
import microwave_oven from '../../assets/B/microwave_oven.jpg'
import night_cars from '../../assets/B/night_cars.JPG'
import night_stair from '../../assets/B/night_stair.JPG'

import StoryPage from '../../components/StoryPage'

const photoRay = [
  night_stair,
  christmas_tree,
  couch_tree,
  microwave_oven,
  night_cars,
]

const B = () => {
  return (
    <>
      <StoryPage
        abstract={B_abstract}
        audio={B_talking}
        photoRay={photoRay}
        // livingRoomPlan={living_room_plan}
      />
    </>
  )
}

export default B
