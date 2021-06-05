import React, { FC } from 'react';
import Providers from './Providers';
import Router from './router';


const App: FC = () => {
  return <Providers>
      <Router />
  </Providers>
}

export default App;