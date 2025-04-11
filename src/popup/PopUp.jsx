import React from 'react'

export default function PopUp(props) {
  return (props.trigger) ? (
    <div class="Popup" className='fixed '>
      <div className='popup-inner relative p-[32px] w-[1280px]
      bg-white rounded-[8px]'>
        <button onClick={()=> props.setTrigger(false)} className='close-btn absolute top-[16px] right-[16px]'>close</button>
        {props.children}
      </div>
    </div>
  ) : "";
}
