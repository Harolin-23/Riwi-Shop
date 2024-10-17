
import Header from './Components/Header/Header.tsx'
import Banner from './Components/Banner/Banner.tsx'
import Categories from './Components/categories/categories.tsx'
import CarroucelHome from './Components/carroucel/CarroucelHome.tsx'

function App() {

  return (
    <>
    <Header />
    <Banner />
    <Categories categories={[]} />
    <div className='container-carroucel'>
      <CarroucelHome />
    </div>
    </>
  )
}

export default App
