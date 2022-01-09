import React, { useState, useRef } from 'react'
import { IconButton } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { TextField } from '@mui/material'
import Zoom from '@mui/material/Zoom'

interface AddTodoButtonParam {
  onClick: (e: any) => void
}
const AddTodoButton = ({ onClick }: AddTodoButtonParam) => {
  return (
    <IconButton aria-label="add todo" onClick={onClick}>
      <AddCircleOutlinedIcon />
    </IconButton>
  )
}

const AddMode: JSX.Element = (
  <TextField required label="New Plan Name" variant="standard" focused />
)

export const AddTodoArea = (): JSX.Element => {
  const [addMode, setAddMode] = useState(false)
  const onClickAdd = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log('clicked')
    setAddMode(true)
  }

  // const element = useRef()
  // const handleCloseModal = (e: any) => {
  //   if (addMode && (!element.current || !element.current.contains(e.target)))
  //     setAddMode(false)
  // }

  if (addMode) {
    return <Zoom in={true}>{AddMode}</Zoom>
  }
  return <AddTodoButton onClick={onClickAdd} />
}
