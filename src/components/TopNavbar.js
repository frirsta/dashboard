import Toolbar from '@mui/material/Toolbar'
import React from 'react'
import Search from './Search'
import AccountMenu from './AccountMenu'

const TopNavbar = () => {
  return (
   <Toolbar sx={{justifyContent: 'flex-end'}}>
    <Search />
    <AccountMenu />
   </Toolbar>
  )
}

export default TopNavbar