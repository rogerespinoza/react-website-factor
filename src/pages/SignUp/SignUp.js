import React from 'react'
import {InfoSection} from '../../components/'
import { homeObjFour } from './Data'

export default function Home() {
  return (
    <>
      <InfoSection {...homeObjFour} />
    </>
  )
}
