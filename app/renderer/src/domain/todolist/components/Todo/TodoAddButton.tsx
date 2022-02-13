import React, { useState, useRef, useEffect } from 'react'
import { Box, IconButton, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import TodoType, { SubTodoType } from '../../types'
import { styled } from '@mui/material/styles'

import { useRecoilValue } from 'recoil'

import {
  InputModeParam,
  ButtonModeParam,
  TodoAddButtonParam,
} from '../../types'

import { newPlanState } from '../../../../common/atom/state'

const InputMode = ({ onEnter, onChange, innerRef }: InputModeParam) => {
  const newPlan = useRecoilValue<string>(newPlanState)

  return (
    <InputModeTextField
      onKeyDown={onEnter}
      onChange={onChange}
      value={newPlan}
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
  onEnter,
  onChange,
}: TodoAddButtonParam): JSX.Element {
  const [inputMode, setInputMode] = useState<boolean>(false)
  const wrapperRef = useRef(null)
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setInputMode(!inputMode)
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
