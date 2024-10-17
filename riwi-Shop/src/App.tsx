
import Header from './Components/Header/Header.tsx'
import Banner from './Components/Banner/Banner.tsx'
import Categories from './Components/categories/categories.tsx'


function App() {

  return (
    <>
    <Header />
    <Banner />
    <Categories categories={[]} />
    </>
  )
}

export default App
