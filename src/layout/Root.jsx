import { Header, Footer } from '../components'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='bg-primary min-h-screen dark:bg-dark-mid'>
      <Header />
      <main className='max-w-[1200px] mx-auto px-[10px] py-[30px] md:p-[40px] min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root
