import React from 'react'

export default function Profile(props) {
  return (
    <div>
        <h1>Profile</h1>
        <button onClick={()=>props.setprofile(false)}>Back</button>
    </div>
  )
}
