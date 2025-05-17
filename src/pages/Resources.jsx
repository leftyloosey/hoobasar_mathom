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
    return (
      <p>
        <a className='font-bold text-blue-400' href={linkInfo[0]}>
          {linkInfo[1]}
        </a>
        {linkInfo[2] ? <span className='text-xs'>{linkInfo[2]}</span> : <></>}
      </p>
    )
  }

  return (
    <div className='ml-5'>
      {/* <span className='text-2xl font-bold'>Resources</span> */}
      <div className='flex flex-col gap-y-4 mt-2 pb-2 w-1/2'>
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
    </div>
  )
}

export default Resources
