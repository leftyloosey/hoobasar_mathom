import { B_abstract, B_cover_style } from '../../assets/B/B_constants'
import B_talking from '../../assets/B/B_talking.mp3'

import christmas_tree from '../../assets/B/christmas_tree.jpg'
import couch_tree from '../../assets/B/couch_tree.jpg'
import microwave_oven from '../../assets/B/microwave_oven.jpg'
import night_cars from '../../assets/B/night_cars.jpg'
import night_stair from '../../assets/B/night_stair.jpg'

import StoryPage from '../../components/StoryPage'

const photoRay = [
  christmas_tree,
  couch_tree,
  microwave_oven,
  night_cars,
  night_stair,
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
