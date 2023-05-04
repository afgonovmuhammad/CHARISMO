import React, { Suspense } from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import Louder from './component/Louder/Louder.jsx'
import { Answers, Home, Reviews,Shop,Contacts,Layout } from './Routes/Routes'

const router = createBrowserRouter([
  {
    path:'/',
    element:
    <Suspense fallback = {<Louder/>} >
      <Layout />
    </Suspense>,
    children:[
      {
        index:true,
        element:(
          <Suspense fallback = {<Louder/>} >
            <Home/>
          </Suspense> 
        ),
      },
      {
        path:"shop",
        element:(
          <Suspense fallback = {<Louder/>} >
            <Shop/>
          </Suspense>
        )
      },
      {
        path:"answers",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Answers/>
          </Suspense>
        )
      },
      {
        path:"reviews",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Reviews/>
          </Suspense>
        )
      },
      {
        path:"contacts",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Contacts/>
          </Suspense>
        )
      },
      {
        path:"*",
        element:(
          <Suspense fallback={<Louder/>}>
            <Error/>
          </Suspense>
        )
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App