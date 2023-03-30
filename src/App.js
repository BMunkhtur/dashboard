import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import AuthProvider from './context/authContext';
import CategoryProvider from './context/catContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <CategoryProvider>
            <AuthProvider>
              <ScrollToTop />
              <StyledChart />
              <Router />
            </AuthProvider>
          </CategoryProvider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
