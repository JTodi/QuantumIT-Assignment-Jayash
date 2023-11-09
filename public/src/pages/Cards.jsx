import React from 'react'
import './style.css';
import pp1 from '../pp1.jpeg';
import pp2 from '../pp2.jpeg';
import pp3 from '../pp3.jpeg';
import pp4 from '../pp4.jpeg';
import pp5 from '../pp5.jpeg';
import close from '../close.png';
import settings from '../settings.png';

const Cards = () => {
  return (
    <div>
      <div className='cards-heading'>
        <div>#</div>
        <div className='cards-heading-name'>Name</div>
        <div className='cards-date'>Date Created</div>
        <div className='cards-role'>Role</div>
        <div className='cards-status'>Status</div>
        <div className='cards-action'>Action</div>
      </div>

      <div className='cards-data'>
        <div className='cards-slno'>1</div>
        <div className='cards-heading-name'>
          <img src={pp1}/>
          <span>Michael</span>
        </div>
        <div className='cards-date'>14/11/12</div>
        <div className='cards-role'>Developer</div>
        <div className='cards-status'>Active</div>
        <div className='cards-action'>
          <img src={settings}/>
          <img src={close}/>
        </div>
      </div>

      <div className='cards-data'>
        <div className='cards-slno'>2</div>
        <div className='cards-heading-name'>
          <img src={pp2}/>
          <span>Michael</span>
        </div>
        <div className='cards-date'>12/10/12</div>
        <div className='cards-role'>Designer</div>
        <div className='cards-status'>Active</div>
        <div className='cards-action'>
          <img src={settings}/>
          <img src={close}/>
        </div>
      </div>

      <div className='cards-data'>
        <div className='cards-slno'>3</div>
        <div className='cards-heading-name'>
          <img src={pp3}/>
          <span>Dani</span>
        </div>
        <div className='cards-date'>4/12/19</div>
        <div className='cards-role'>Tester</div>
        <div className='cards-status'>Inactive</div>
        <div className='cards-action'>
          <img src={settings}/>
          <img src={close}/>
        </div>
      </div>

      <div className='cards-data'>
        <div className='cards-slno'>4</div>
        <div className='cards-heading-name'>
          <img src={pp4}/>
          <span>Sam</span>
        </div>
        <div className='cards-date'>8/2/10</div>
        <div className='cards-role'>Engineer</div>
        <div className='cards-status'>Inactive</div>
        <div className='cards-action'>
          <img src={settings}/>
          <img src={close}/>
        </div>
      </div>

      <div className='cards-data'>
        <div className='cards-slno'>5</div>
        <div className='cards-heading-name'>
          <img src={pp5}/>
          <span>Harvey</span>
        </div>
        <div className='cards-date'>27/5/15</div>
        <div className='cards-role'>Manager</div>
        <div className='cards-status'>Active</div>
        <div className='cards-action'>
          <img src={settings}/>
          <img src={close}/>
        </div>
      </div>
    </div>
  )
}

export default Cards