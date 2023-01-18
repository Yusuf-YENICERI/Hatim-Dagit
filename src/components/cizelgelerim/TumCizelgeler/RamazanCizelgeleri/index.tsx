





import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cizelgelerimActions } from '../../../../features/cizelgelerim'

const RamazanCizelgeleri = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cizelgelerimActions.changePreviousComponentName('tumcizelgeler'))
  })

  return (
    <div>RamazanCizelgeleri</div>
  )
}

export default RamazanCizelgeleri