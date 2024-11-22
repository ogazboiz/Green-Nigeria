import { Outlet } from 'react-router-dom'
import Navigation from '../Components/Header/Navigation'

function RootLayout() {
  return (
    <div>
        {/* <Navigation/> */}
        <main>
            <Outlet/>
        </main>

    </div>
  )
}

export default RootLayout