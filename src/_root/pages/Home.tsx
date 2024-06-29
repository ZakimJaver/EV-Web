import GridLayout from '@/components/grid/GridLayout'
import { toolLinks } from '@/constants'

const Home = () => {
  return (
    <div className='h-full w-full'>
      <GridLayout items={toolLinks} />
    </div>
  )
}

export default Home