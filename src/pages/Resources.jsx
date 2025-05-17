import { useState } from 'react'
import {
  resourcesForRenters,
  resourcesForHomeowners,
  housingConnect,
  roadHome,
  housingAuthSLC,
  thrivingPlace,
  utahHousingCoalition,
  uhcSLConf,
  utahCommunityAction,
  unitedWay,
  neighborNonprofit,
  assistUtah,
  habitat,
  tripleA,
  disabilityLaw,
  nationalHousing,
  allianceCommunity,
  utahLabor,
  utahLegal,
} from '../assets/resource_links/resources'

const Resources = () => {
  const ResourceLink = ({ linkInfo }) => {
    const [hoverer, setHoverer] = useState('')

    return (
      <p>
        <a
          className='font-bold text-blue400 text-gray-500'
          href={linkInfo[0]}
          onMouseEnter={() => setHoverer(linkInfo[2])}
          onMouseLeave={() => setHoverer()}
        >
          {linkInfo[1]}
        </a>
        {hoverer ? (
          <span className='text-xs text-nowrap pl-1.5'>{hoverer}</span>
        ) : (
          <></>
        )}
        {/* {linkInfo[2] ? <span className='text-xs'>{linkInfo[2]}</span> : <></>} */}
      </p>
    )
  }

  return (
    <div className='ml-5 flex flex-row'>
      {/* <span className='text-2xl font-bold'>Resources</span> */}
      <div className='flex flex-col gap-y-4 mt-2 pb-2'>
        <ResourceLink linkInfo={resourcesForRenters} />
        <ResourceLink linkInfo={resourcesForHomeowners} />
        <ResourceLink linkInfo={housingConnect} />
        <ResourceLink linkInfo={roadHome} />
        <ResourceLink linkInfo={housingAuthSLC} />
        <ResourceLink linkInfo={thrivingPlace} />
        <ResourceLink linkInfo={utahHousingCoalition} />
        <ResourceLink linkInfo={uhcSLConf} />
        <ResourceLink linkInfo={utahCommunityAction} />
        <ResourceLink linkInfo={unitedWay} />
        <ResourceLink linkInfo={neighborNonprofit} />
        <ResourceLink linkInfo={assistUtah} />
        <ResourceLink linkInfo={habitat} />
        <ResourceLink linkInfo={tripleA} />
        <ResourceLink linkInfo={disabilityLaw} />
        <ResourceLink linkInfo={nationalHousing} />
        <ResourceLink linkInfo={allianceCommunity} />
        <ResourceLink linkInfo={utahLabor} />
        <ResourceLink linkInfo={utahLegal} />
      </div>
      {/* <div className='w-full h-64 mt-96'>{hoverer}</div> */}
    </div>
  )
}

export default Resources
