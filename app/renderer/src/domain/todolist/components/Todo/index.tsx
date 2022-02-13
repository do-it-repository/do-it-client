import React, { useState } from 'react'
import { Box, List, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

import { defaultTodoList, defaultNewTodo } from '../../constants'
import TodoType from '../../types'

import Todo from './Todo'
import TodoAddButton from './TodoAddButton'

import { todoState } from '../../../../common/atom/state'
import { useRecoilState } from 'recoil'

export default function TodoIndex(): JSX.Element {
  // const [todoList, setTodoList] = useState<TodoType[]>(defaultTodoList)
  const [todoList, setTodoList] = useRecoilState<TodoType[]>(todoState)

  const [newTodo, setNewTodo] = useState<TodoType>(defaultNewTodo)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewTodo({ ...newTodo, plan: e.target.value })
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setNewTodo({ ...newTodo, id: todoList.length + 1 })
      setTodoList(todoList.concat(newTodo))
      setNewTodo(defaultNewTodo)
    }
  }

  return (
    <Box>
      <AddTodoButtonWrapper>
        <TodoAddButton
          onEnter={onEnter}
          onChange={onChange}
          newTodo={newTodo}
        />
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
