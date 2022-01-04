import * as React from 'react'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import EditIcon from '@mui/icons-material/Edit'

export default function IconSpeedDial({ props }: any): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  //handler function
  const wireUp = (which: any) => {
    switch (which) {
      case 'delete':
        console.log('You have pressed delete')
        props.id
        break
      case 'copy':
        console.log('You have pressed copy')
        break
      case 'convert':
        console.log('You have pressed convert')
        break
      default:
        break
    }
  }

  const actions = [
    { icon: <DeleteIcon />, name: 'Delete', do: () => wireUp('delete') },
    { icon: <FileCopyIcon />, name: 'Copy', do: () => wireUp('copy') },
    {
      icon: <SwapHorizIcon />,
      name: 'Convert PlanType',
      do: () => wireUp('convert'),
    },
  ]

  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{
        position: 'absolute',
        bottom: 10,
        right: 16,
        width: 10,
      }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      direction="left"
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.do}
        />
      ))}
    </SpeedDial>
  )
}