import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode} from './theme';
import TopBar from './views/global/TopBar';
import Dashboard from './views/dashboard';
import SideBar from './views/global/SideBar';
// import Team from './views/team';
// import Invoices from './views/invoices';
// import Contact from './views/contact';
// import Bar from './views/bar';
// import Form from './views/form';
// import Line from './views/line';
// import Pie from './views/pie';
// import FAQ from './views/faq';
// import Geography from './views/geography';
// import Calendar from './views/calendar';



function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <div className="app">
        <SideBar /> 
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
