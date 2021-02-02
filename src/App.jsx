import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'dtl-react-components';
import '../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import TheContent from './components/TheContent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <TheContent />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
