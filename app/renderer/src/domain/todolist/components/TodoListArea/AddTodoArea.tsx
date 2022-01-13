import React, { useState, useRef, useEffect } from 'react'
import { Autocomplete, IconButton } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { TextField } from '@mui/material'
import Zoom from '@mui/material/Zoom'
import { Container } from '@mui/material'

interface AddTodoButtonParam {
  onClick: (e: any) => void
  addMode: boolean
}
const AddTodoButton = ({ onClick, addMode }: AddTodoButtonParam) => {
  const ButtonMode: JSX.Element = (
    <IconButton aria-label="add todo" onClick={onClick}>
      <AddCircleOutlinedIcon />
    </IconButton>
  )
  return <Zoom in={!addMode}>{ButtonMode}</Zoom>
}

const AddMode: JSX.Element = (
  <Container>
    <TextField
      sx={{
        minWidth: 270,
        marginTop: 1,
        marginLeft: 22,
      }}
      variant="standard"
      placeholder="'새로운 플랜 #분류' 를 입력하고 엔터"
      autoFocus
    />
  </Container>
)
const AddModeOn = ({ innerRef, addMode }: any): JSX.Element => {
  return (
    <Zoom in={addMode} ref={innerRef}>
      {AddMode}
    </Zoom>
  )
}

function offAddMode(
  setAddMode: React.Dispatch<React.SetStateAction<boolean>>,
  ref: any,
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setAddMode((prev) => !prev)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export const AddTodoArea = (): JSX.Element => {
  const [addMode, setAddMode] = useState(false)
  const wrapperRef = useRef(null)
  offAddMode(setAddMode, wrapperRef)
  const onClickAdd = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log('clicked')
    setAddMode(true)
  }

  if (addMode) {
    return <AddModeOn addMode={addMode} innerRef={wrapperRef} />
  }
  return <AddTodoButton onClick={onClickAdd} addMode={addMode} />
}
