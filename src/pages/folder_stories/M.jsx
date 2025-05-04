import StoryPage from '../../components/StoryPage.jsx'

import { M_abstract } from '../../assets/M/M_constants.js'
import JO_talking from '../../assets/JO/JO_talking.wav'

import building_side from '../../assets/M/building_side.JPG'
import stove from '../../assets/M/stove.JPG'
import front_door from '../../assets/M/front_door.JPG'
import vent from '../../assets/M/vent.JPG'
import u_courtyard from '../../assets/M/u_courtyard.JPG'

const photoRay = [front_door, vent, stove, building_side, u_courtyard]
const M = () => {
  return (
    <>
      <StoryPage abstract={M_abstract} audio={JO_talking} photoRay={photoRay} />
    </>
  )
}

export default M
