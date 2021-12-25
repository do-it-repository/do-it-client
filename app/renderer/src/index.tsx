import { AppBar, IconButton, Toolbar, Box } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import LeftGNB from './components/LeftGNB'

export default function App() {
  const [leftGnbOpen, setLeftGnbOpen] = useState(false)

  const onOpenLeftGnb = () => {
    setLeftGnbOpen(true)
  }

  const onCloseLeftGnb = () => {
    setLeftGnbOpen(false)
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={onOpenLeftGnb}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <LeftGNB open={leftGnbOpen} onClose={onCloseLeftGnb} />
    </Box>
  )
}
