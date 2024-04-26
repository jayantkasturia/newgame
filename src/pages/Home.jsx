
import Hash from '../components/Cparts/Hash'
import CoursesMy from '../components/Cparts/Courses'
import LeftHero from '../components/Cparts/LeftHero'
import RightHero from '../components/Cparts/RightHero'
import Navbar from '../components/Cparts/Navbar'

const Home = () => {
  return (
    <div >
      <Navbar/>
      <Hash/>
      <div style={{ width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CoursesMy/>
      </div>
      <div className='font-black flex flex-col text-5xl' style={{ width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'5rem' }}>
        <h1>Students Perks</h1>
      </div>
      <div style={{ width: '86%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <LeftHero/>
      </div>
      <div style={{ width: '86%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <RightHero/>
      </div>
    </div>
  )
}

export default Home
