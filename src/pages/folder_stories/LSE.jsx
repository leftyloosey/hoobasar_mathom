import { LSE_abstract } from '../../assets/LSE/LSE_constants'
import LSE_talking from '../../assets/LSE/LSE_talking.mp3'

import house2 from '../../../dist/house2.svg'

import StoryPage from '../../components/StoryPage'

const photoRay = [house2]

const LSE = () => {
  return (
    <>
      <StoryPage
        abstract={LSE_abstract}
        audio={LSE_talking}
        photoRay={photoRay}
      />
    </>
  )
}

export default LSE
