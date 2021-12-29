import { Drawer, IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import React from 'react'

interface PropType {
  open: boolean
  onClose: () => void
}

export default function LeftGNB({ open, onClose }: PropType) {
  console.log(open)
  return (
    <Drawer
      sx={{
        [`& .MuiDrawer-paper`]: {
          width: 300,
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
      onBackdropClick={onClose}
    >
      <IconButton onClick={onClose}>
        <ChevronLeftIcon />
      </IconButton>
      {/* <Divider /> */}
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  )
}
