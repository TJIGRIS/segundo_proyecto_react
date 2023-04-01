import React from 'react'
import { NavComponent } from '../components/headerComponent/NavComponent'
import { HeaderComponent } from '../components/headerComponent/HeaderComponent'

export const Header = () => {
  return (
    <div>
      <NavComponent />
      <HeaderComponent />
    </div>
  )
}
