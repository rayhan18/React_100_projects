import React from 'react'
import BasicUsestate from '../Components/AdvamceHook/BasicUsestate'
import Hookarray from '../Components/AdvamceHook/Hookarray'
import UsestateError from '../Components/AdvamceHook/UsestateError'

export default function HooksPage() {
  return (
    <div>
        <UsestateError/>
        <BasicUsestate/>
        <Hookarray/>
    </div>
  )
}
