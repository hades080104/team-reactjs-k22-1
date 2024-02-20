import React, { Component, Suspense } from 'react'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./components/Layout/DefaultLayout'))

function App() {
    fetch('http://localhost:3000/lecturers')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
        })
  return (
    <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
