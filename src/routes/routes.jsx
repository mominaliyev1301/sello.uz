import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Firstpage from '../pages/firstpage'
import Secondpage from '../pages/secondpage'

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                  <Route  path='/' element={<Firstpage/>} />
                  <Route  path='/secondpage' element={<Secondpage/>} />
            </Routes>
        
        </BrowserRouter>
    )
  }














// export default function routes() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                   <Route  path='/' element={<Firstpage/>} />
//                   <Route  path='/secondpage' element={<Secondpage/>} />
//             </Routes>
        
//         </BrowserRouter>
//     )
//   }