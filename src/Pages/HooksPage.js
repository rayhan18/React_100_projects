import React from 'react'
import BasicUsestate from '../Components/AdvamceHook/BasicUsestate'
import { Counter } from '../Components/AdvamceHook/Counter'
import Hookarray from '../Components/AdvamceHook/Hookarray'
import ObjUseState from '../Components/AdvamceHook/ObjUseState'
import BasicUseeffect from '../Components/AdvamceHook/UseEffect/BasicUseeffect'
import Fatchdata from '../Components/AdvamceHook/UseEffect/Fatchdata'
import Useeffect2 from '../Components/AdvamceHook/UseEffect/Useeffect-2'
import UsestateError from '../Components/AdvamceHook/UsestateError'

export default function HooksPage() {
  return (
    <div>
        <UsestateError/>
        <BasicUsestate/>
        <Hookarray/>
        <ObjUseState/>
        <Counter/>
        <BasicUseeffect/>
        <Useeffect2/>
        <Fatchdata/>
    </div>
  )
}
