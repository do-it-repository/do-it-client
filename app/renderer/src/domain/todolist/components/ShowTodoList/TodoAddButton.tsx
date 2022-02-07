import React, { useState, useEffect, useRef, ReactText } from 'react'
import { IconButton } from '@mui/material'
import { Box, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { styled } from '@mui/material'

interface InputModeParam {
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  innerRef: any
}

interface ButtonModeParam {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
}

interface TodoAddButtonParam {
  EnterFunc: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputMode = ({ onEnter, onChange, innerRef }: InputModeParam) => {
  return (
    <InputModeTextField
      onKeyDown={onEnter}
      onChange={onChange}
      ref={innerRef}
      variant="standard"
      placeholder="새로운 플랜을 입력하고 엔터"
      autoFocus
    />
  )
}

const ButtonMode = ({ onClick }: ButtonModeParam) => {
  return (
    <Box onClick={onClick}>
      <IconButton>
        <AddIcon />
      </IconButton>
    </Box>
  )
}

function clickOutside(
  setInputMode: React.Dispatch<React.SetStateAction<boolean>>,
  ref: any,
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setInputMode((prev) => !prev)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default function TodoAddButton({
  EnterFunc,
  onChange,
}: TodoAddButtonParam): JSX.Element {
  const [inputMode, setInputMode] = useState<boolean>(false)
  const wrapperRef = useRef(null)
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setInputMode(!inputMode)
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      EnterFunc()
    }
  }

  clickOutside(setInputMode, wrapperRef)

  if (inputMode === true) {
    return (
      <InputMode onEnter={onEnter} onChange={onChange} innerRef={wrapperRef} />
    )
  }
  return <ButtonMode onClick={onClick} />
}

const InputModeTextField = styled(TextField)({
  minWidth: 270,
  marginTop: 1,
  marginLeft: 22,
})
