import Router from './pages/Router'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ConfigProvider } from 'antd'
import { useAuthContext } from './contexts/Auth';
import ScreenLoader from './components/ScreenLoader';

function App() {
  const { isLoading } = useAuthContext()

  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" } }}>
        {!isLoading
          ? <Router />
          : <ScreenLoader />
        }
      </ConfigProvider>
    </>
  )
}

export default App