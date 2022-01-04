import * as React from 'react'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import EditIcon from '@mui/icons-material/Edit'
import { fontSize } from '@mui/system'

const actions = [
  { icon: <DeleteIcon />, name: 'Delete' },
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SwapHorizIcon />, name: 'Convert PlanType' },
]

export default function IconSpeedDial(): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  )
}
