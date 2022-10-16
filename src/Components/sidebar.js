import React from 'react';
import './SideBar.css';

import SidebarData from "./sidebardata";

function SideBar() {
     return (
          <div className="sidebar">
               <ul className="Sidebarlist">
                    {SidebarData.map((val, key) => {
                         return (
                              <li key={key}
                                   onClick={(
                                        window.location.pathname = val.link)}>
                                   <div>{val.icon}</div>
                                   <div>{val.title}</div>
                              </li>
                         );
                    })}
               </ul>
          </div>
     );
}

export default SideBar;
