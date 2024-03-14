
import Cloud1 from '../components/svg/cloud1'


interface CloudProps {
  left: number
  top: number
}

const Clouds: React.FC<CloudProps> = ({ left, top }) => {
  const duration = Math.random() * 2 + 5
  const cloudStyle = {
    left: `${left}px`,
    animation: `twinkle ${duration}s infinite, moveStar 60s infinite`,
    top: `${top}px`,
  }

  return <div className="cloud" style={cloudStyle}><Cloud1 /></div>
}
const CloudContainer: React.FC = () => {
  const clouds = Array.from({ length: 4 }).map(() => ({
    left: Math.random() * window.innerWidth,
    top: Math.random() * window.innerHeight,
  }));

  return (
    <div className="absolute top-0 left-0 z-0 w-full h-full">
      {clouds.map((cloud, index) => (
        <Clouds key={index} left={cloud.left} top={cloud.top} />
      ))}
    </div>
  );
}
export default CloudContainer
