


import { Loader } from '@mantine/core'
import React from 'react'

const LoadingFullPage = ({visible}) => {
  return (
    <div style={{zIndex:100, height:'100%', width: '100%', position: 'fixed', display: visible ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', opacity: '0.7'}}><Loader size={50} styles={{root: {zIndex: 101}}} color="green"/></div>
  )
}

export default LoadingFullPage