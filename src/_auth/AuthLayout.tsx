import GridLayout from '@/components/grid/GridLayout'
import { toolLinks } from '@/constants'


const AuthLayout = () => {
  return (
    <div className='w-screen h-screen bg-red-50'>
    <GridLayout items={toolLinks} />
    </div>
  )
}
export default AuthLayout