import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import BandCutting from './pages/BandCutting'
import StanceGrip from './pages/StanceGrip'
import AimingRelease from './pages/AimingRelease'
import Ammo from './pages/Ammo'
import Safety from './pages/Safety'
import Maintenance from './pages/Maintenance'
import Glossary from './pages/Glossary'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/band-cutting" element={<BandCutting />} />
          <Route path="/stance-grip" element={<StanceGrip />} />
          <Route path="/aiming-release" element={<AimingRelease />} />
          <Route path="/ammo" element={<Ammo />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
