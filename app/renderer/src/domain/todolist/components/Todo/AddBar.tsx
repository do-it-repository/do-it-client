import React, { useState, useRef, useEffect } from 'react'
import { Box, IconButton, TextField } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask';
import TodoType from '../../types'
import { styled } from '@mui/material/styles'
import { InlineBox } from '../../../../common/components/StyledMui';

import { useRecoilState } from 'recoil'

import {
  newPlanState,
  newTodoState,
  todoListState,
} from '../../../../common/atom/state'

export interface InputModeParam {
  innerRef: any
}
export interface ButtonModeParam {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
}

const InputMode = ({ innerRef }: InputModeParam) => {
  const [newPlan, setNewPlan] = useRecoilState<string>(newPlanState)
  const [newTodo, setNewTodo] = useRecoilState<TodoType>(newTodoState)
  const [todoList, setTodoList] = useRecoilState<TodoType[]>(todoListState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlan(e.target.value)
    setNewTodo({ ...newTodo, plan: e.target.value})
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setNewTodo({ ...newTodo, id: todoList.length + 1 })
      setTodoList(todoList.concat(newTodo))
      setNewPlan('')
    }
  }

  return (
    <InputModeTextField
      spellCheck={false}
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
        <AddTaskIcon />
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

export default function AddBar({}): JSX.Element {
  const [inputMode, setInputMode] = useState<boolean>(false)
  const wrapperRef = useRef(null)
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setInputMode(!inputMode)
  }

  clickOutside(setInputMode, wrapperRef)

    return (
      <InlineBox>
      { inputMode === true && <InputMode innerRef={wrapperRef} /> }
      { inputMode === false && <ButtonMode onClick={onClick} /> }
      </InlineBox>
  )
}

const InputModeTextField = styled(TextField)({
  minWidth: 270,
  marginTop: 4,
  marginBottom:4,
  marginLeft: 22,
})
