import { AuthProvider } from '../providers/authProvider';
import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
