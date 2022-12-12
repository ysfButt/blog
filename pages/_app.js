import MainLayout from '../components/MainLayout';

// Styles
import '../styles/main.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} /> 
    </MainLayout>
  )
}

export default MyApp
