import React, { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import { Box, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export default function AddTodoButton(): JSX.Element {
  const [AddModeOn, setAddModeOn] = useState<boolean>(false)
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setAddModeOn(!AddModeOn)
  }
  if (AddModeOn === true) {
    return <TextField />
  }
  return (
    <Box onClick={onClick}>
      <IconButton>
        <AddIcon />
      </IconButton>
    </Box>
  )
}
