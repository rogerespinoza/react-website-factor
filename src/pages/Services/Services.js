import React from 'react'
import {InfoSection, Pricing} from '../../components/'
import { homeObjFour } from './Data'

export default function Home() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  )
}
