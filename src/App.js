import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {BrowserRouter,} from 'react-router-dom';
import styles from './App.module.css';

import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';

import RootRouter from './routers/RootRouter';
import HeaderTabs from './routers/HeaderTabs';

function App(){
  return(
    <BrowserRouter>
      <HeaderTabs />
      <RootRouter />
    </BrowserRouter>
  )
}

// const pages = [
//   {
//     displayName: 'One',
//     value: 1,
//   },
//   {
//     displayName: 'Two',
//     value: 2,
//   },
//   {
//     displayName: 'Three',
//     value: 3,
//   },
// ];

// function App () {
//   const [currentPage, setCurrentPage] = useState(pages[0]);

//   useEffect(() => {
//     console.log('currentPage: ', currentPage);
//   }, [currentPage])

//   return (
//     <div className={styles.container}>
//       <div>
//         {pages.map((page, pI) => {
//           const current = page.value === currentPage.value;
//           return (
//             <span
//             key={pI}
//               onClick={() => setCurrentPage(page)}
//               style={{
//                 marginRight: '10px',
//                 textDecoration: 'none',
//                 color: current ? 'skyblue' : 'black',
//               }}
//             >
//               {page.displayName}
//             </span>
//           );
//         })}
//       </div>

//       {currentPage.value === 1 && <One />}
//       {currentPage.value === 2 && <Two />}
//       {currentPage.value === 3 && <Three />}
//     </div>
//   );
// }

export default App;