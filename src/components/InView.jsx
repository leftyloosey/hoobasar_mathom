import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router'

const InView = () => {
  const { ref, inView, entry, rootMargin } = useInView({
    threshold: 0,
    initialInView: false,
    // rootMargin: '-50% 0% -50% 0%',
  })
  console.log(entry)
  console.log(rootMargin)
  return (
    <div ref={ref} className=''>
      <h2>{`inside viewport ${inView}.`}</h2>
    </div>
  )
}
export default InView
