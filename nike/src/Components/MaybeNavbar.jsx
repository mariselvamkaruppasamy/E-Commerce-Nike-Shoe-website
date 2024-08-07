import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const MaybeNavbar = ({children}) => {

    const location = useLocation();
    const [navbar, setNavbar] = useState(false);

    useEffect(()=>{
        if (location.pathname === '/alogin' || location.pathname === '/acontrol') {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }, [location])

  return (
    <>
        {navbar && children}
    </>
  )
}
