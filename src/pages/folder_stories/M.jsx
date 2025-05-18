import StoryPage from '../../components/StoryPage.jsx'

import { M_abstract } from '../../assets/M/M_constants.js'
import M_talking from '../../assets/M/M_talking.mp3'

import building_side from '../../assets/M/building_side.JPG'
import stove from '../../assets/M/stove.JPG'
import front_door from '../../assets/M/front_door.JPG'
import vent from '../../assets/M/vent.JPG'
import u_courtyard from '../../assets/M/u_courtyard.JPG'

const photoRay = [u_courtyard, front_door, vent, stove, building_side]
const M = () => {
  return (
    <>
      <StoryPage abstract={M_abstract} audio={M_talking} photoRay={photoRay} />
    </>
  )
}

export default M
