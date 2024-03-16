
import Cloud1 from '../svg/cloud1'
import Cloud2 from '../svg/cloud2'
import Cloud3 from '../svg/cloud3'
import Cloud4 from '../svg/cloud4'

interface CloudProps {
  left: number
  top: number
}

const Clouds: React.FC<CloudProps> = ({ left, top }) => {
  
  const clouds = [Cloud1, Cloud2, Cloud3, Cloud4]

  return (
    <div className="cloud-container absolute z-0" style={{ left: `${left}px`, top: `${top}px` }}>
      {clouds.map((Cloud, i) => (
        <Cloud key={i} />
      ))}
    </div>
  )
}

const CloudContainer: React.FC = () => {
  const clouds = Array.from({ length: 4 }).map(() => ({
    left: Math.random() * window.innerWidth + 200,
    top: Math.random() * window.innerHeight,

  }))

  return (
    <div className="clouds-container absolute z-0 top-0 left-0 w-[100vw] h-[100vw]">
      {clouds.map((cloud, index) => (
        <Clouds key={index} left={cloud.left} top={cloud.top} />
      ))}
    </div>
  )
}

export default CloudContainer
