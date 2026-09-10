import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Upload from './pages/Upload'
import Result from './pages/Result'
import History from './pages/History'
import DiseaseList from './pages/DiseaseList'
import DiseaseDetail from './pages/DiseaseDetail'

import ScrollToHash from './components/common/ScrollToHash'

function App() {
  return (
    <>
      {/* Handle navigation to sections using URL hashes */}
      <ScrollToHash />

      {/* Application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/result" element={<Result />} />
        <Route path="/history" element={<History />} />
        <Route path="/diseases" element={<DiseaseList />} />
        <Route
          path="/diseases/:id"
          element={<DiseaseDetail />}
        />
      </Routes>
    </>
  )
}

export default App