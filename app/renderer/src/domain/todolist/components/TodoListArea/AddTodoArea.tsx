import React, { useState, useRef, useEffect } from 'react'
import { IconButton } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { TextField } from '@mui/material'
import Zoom from '@mui/material/Zoom'
import { Box } from '@mui/system'

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
  <TextField
    // sx={{ width: 150 }}
    label="New Plan Name"
    variant="standard"
    placeholder="새로운 플랜을 입력하고 엔터"
    focused
  />
)
const AddModeOn = React.forwardRef((props, ref): JSX.Element => {
  return (
    <Zoom in={true} ref={ref}>
      {AddMode}
    </Zoom>
  )
})

function offAddMode(
  setAddMode: React.Dispatch<React.SetStateAction<boolean>>,
  ref: any,
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setAddMode(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export const AddTodoArea = (props: any): JSX.Element => {
  const [addMode, setAddMode] = useState(false)
  const wrapperRef = useRef(null)
  offAddMode(setAddMode, wrapperRef)
  const onClickAdd = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log('clicked')
    setAddMode(true)
  }

  if (addMode) {
    return (
      // <span ref={wrapperRef}>
      <AddModeOn ref={wrapperRef} />
      /* {props.children}
      </span> */
    )
  }
  return <AddTodoButton onClick={onClickAdd} />
}
