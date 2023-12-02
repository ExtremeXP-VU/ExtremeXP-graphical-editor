import { useState } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './styles/app.scss'
import Load from './containers/Load'
import Editor from './containers/Editor'

const router = createHashRouter([{
  path: '/',
  element: <Load />
},{
  path: '/editor/:fileName',
  element: <Editor />
}])

function App() {
  return <RouterProvider router={router} />
}

export default App
