// Dashboard.jsx

import React from 'react';
import Body from './Body';
import './Dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Dashboard() {
  return (
    <div className='a2'>
        <div className='a1'>
            <div className='dash'>
            <i className="bi bi-house-door-fill"></i>
            <span className="icon-text" >Dashboard</span>
            </div>
            <div className='dash'>
            <i class="bi bi-person"></i>
            <span className="icon-text-1">CRM</span>
            </div>
            <div className='dash'>
            <i class="bi bi-people-fill"></i>
            <span className="icon-text-1">HRM</span>
            </div>
            <div className='dash'>
            <i class="bi bi-graph-up-arrow"></i>
            <span className="icon-text-1">Productivity</span>
            </div>
            <div className='dash'>
            <i class="bi bi-cash-coin"></i>
            <span className="icon-text-1">Finance</span>
            </div>
            <div className='dash'>
            <i class="bi bi-calendar2-event-fill"></i>
            <span className="icon-text-1">Scheduling</span>
            </div>
            <div className='dash'>
            <i class="bi bi-magic"></i>
            <span className="icon-text-1">Essentials</span>
            </div>
        </div>
        <div class="overflow-scroll">
           <Body />
        </div>
     </div>
  );
}

export default Dashboard;
