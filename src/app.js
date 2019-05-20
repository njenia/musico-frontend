import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import {Router} from "@reach/router"

import HomeContainer from './home/container'
import { SongPlayerContainer } from './song-player'


const App = () => (
  <Provider store={store}>
    <Router>
      <HomeContainer path="/" />
      <SongPlayerContainer path="/song/:songId" />
    </Router>
  </Provider>
)

export default App
