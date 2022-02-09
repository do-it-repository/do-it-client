import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Stack, List } from '@mui/material'
import { styled } from '@mui/material/styles'

import { defaultTodoList, defaultNewTodo } from '../constants'
import TodoType from '../types'

import Todo from '../components/Todo'
import TodoAddButton from '../components/Todo/TodoAddButton'

const TodoView = (): JSX.Element => {
  const [todoList, setTodoList] = useState<TodoType[]>(defaultTodoList)
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

export default function TodoPlanner() {
  return (
    <WallPaper>
      <WidgetTodoList>
        <TodoView />
      </WidgetTodoList>
    </WallPaper>
  )
}

const WallPaper = styled('div')({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(30deg)',
  },
})

const WidgetTodoList = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 40,
  width: 650,
  height: 650,
  maxWidth: '100%',
  position: 'relative',
  overflow: 'auto',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(60px)',
}))
