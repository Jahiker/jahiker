import { Header, Footer } from '../components'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='bg-primary min-h-screen'>
      <Header />
      <main className='max-w-[1200px] mx-auto p-[40px] min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root
