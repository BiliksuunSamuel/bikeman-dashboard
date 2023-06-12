import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '@/renderer/App';
import { store } from '@/renderer/store';
import '@/renderer/i18n';
// import ThemeProvider from '@/renderer/components/base/ThemeProvider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Add API key defined in contextBridge to window object type
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    mainApi?: any;
  }
}

createRoot(document.getElementById('app')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
