import React, { useState, useRef, useEffect } from 'react'
import { Autocomplete, IconButton } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { TextField } from '@mui/material'
import Zoom from '@mui/material/Zoom'
import { Container } from '@mui/material'

interface AddTodoButtonParam {
  onClick: (e: any) => void
  addMode: any
}
const AddTodoButton = ({ onClick, addMode }: AddTodoButtonParam) => {
  const ButtonMode: JSX.Element = (
    <IconButton aria-label="add todo" onClick={onClick}>
      <AddCircleOutlinedIcon />
    </IconButton>
  )
  return <Zoom in={!addMode}>{ButtonMode}</Zoom>
}

interface AddModeParam {
  todoname: any
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const AddMode = ({
  todoname,
  onChange,
  onEnter,
}: AddModeParam): JSX.Element => (
  <Container>
    <div onKeyDown={onEnter}>
      <TextField
        onChange={onChange}
        onKeyDown={onEnter}
        sx={{
          minWidth: 270,
          marginTop: 1,
          marginLeft: 22,
        }}
        value={todoname}
        variant="standard"
        placeholder="'새로운 플랜 #분류' 를 입력하고 엔터"
        autoFocus
      />
    </div>
  </Container>
)

interface AddModeOnParam {
  innerRef: any
  addMode: any
  todoname: any
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
const AddModeOn = ({
  innerRef,
  addMode,
  todoname,
  onChange,
  onEnter,
}: AddModeOnParam): JSX.Element => {
  return (
    <Zoom in={addMode} ref={innerRef}>
      <React.Fragment>
        <AddMode todoname={todoname} onChange={onChange} onEnter={onEnter} />
      </React.Fragment>
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

interface AddTodoAreaParam {
  todoname: any
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
export const AddTodoArea = ({
  todoname,
  onChange,
  onEnter,
}: AddTodoAreaParam): JSX.Element => {
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
      <AddModeOn
        addMode={addMode}
        innerRef={wrapperRef}
        todoname={todoname}
        onChange={onChange}
        onEnter={onEnter}
      />
    )
  }
  return <AddTodoButton onClick={onClickAdd} addMode={addMode} />
}
