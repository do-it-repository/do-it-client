import React, { useState } from 'react'
import { Box, List, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

import { defaultTodoList, defaultNewTodo } from '../../constants'
import TodoType from '../../types'

import Todo from './Todo'
import TodoAddButton from './TodoAddButton'

import {
  todoListState,
  newTodoState,
  newPlanState,
} from '../../../../common/atom/state'
import { useRecoilState } from 'recoil'

export default function TodoIndex(): JSX.Element {
  const [todoList, setTodoList] = useRecoilState<TodoType[]>(todoListState)
  const [newTodo, setNewTodo] = useRecoilState<TodoType>(newTodoState)
  const [newPlan, setNewPlan] = useRecoilState<string>(newPlanState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewPlan(e.target.value)
    setNewTodo({ ...newTodo, plan: newPlan })
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setNewTodo({ ...newTodo, id: todoList.length + 1 })
      setTodoList(todoList.concat(newTodo))
      setNewPlan('')
    }
  }

  return (
    <Box>
      <AddTodoButtonWrapper>
        <TodoAddButton onEnter={onEnter} onChange={onChange} />
      </AddTodoButtonWrapper>
      <List>
        <Stack spacing={1}>
          {todoList.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </Stack>
      </List>
    </Box>
  )
}

const AddTodoButtonWrapper = styled(Box)({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'right',
})
