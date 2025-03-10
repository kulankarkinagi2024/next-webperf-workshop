'use client'
import { useEffect } from 'react'
import React from 'react'

export default function InfoBar() {
  const [info, setInfo] = React.useState(null)

  useEffect(() => {
    fetch('/api/info')
      .then((res) => res.json())
      .then(({ msg }) => setInfo(msg))
  }, [info])

  return !!info ? (
    <div
      style={{
        textAlign: 'center',
        padding: 10,
        borderBottom: '1px solid #eaeaea',
        backgroundColor: 'lightgrey',
        color: 'black',
      }}
    > 
      {info}
    </div>
  ) : null
}
