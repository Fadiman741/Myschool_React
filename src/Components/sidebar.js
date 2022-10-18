import React from 'react';

import SidebarData from "./sidebardata";

function SideBar() {
     return (
          <div className="sidebar">
               <ul className="Sidebarlist">
                    {SidebarData.map((val, key) => {
                         return (
                              <li key={key} className="row"
                                   onClick={(
                                        window.location.pathname = val.link)}>

                                   <div className="icon" >{val.icon}</div>
                                   <div className="title">{val.title}</div>
                              </li>
                         );
                    })}
               </ul>
          </div >
     );
}

export default SideBar;
