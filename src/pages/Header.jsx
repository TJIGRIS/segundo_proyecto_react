import React from 'react'
import { NavComponent } from '../components/headerComponents/NavComponent'
import { HeaderComponent } from '../components/headerComponents/HeaderComponent'

export const Header = () => {
  return (
    <div className="h-screen">
      <NavComponent />
      <HeaderComponent />
    </div>
  )
}
