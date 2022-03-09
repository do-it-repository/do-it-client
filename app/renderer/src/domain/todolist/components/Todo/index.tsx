import React, { useState } from 'react'
import { Box, List, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

import TodoType from '../../types'

import Todo from './Todo'
import TodoAddButton from './TodoAddButton'

import { todoListState } from '../../../../common/atom/state'
import { useRecoilValue } from 'recoil'

export default function TodoIndex(): JSX.Element {
  const todoList = useRecoilValue<TodoType[]>(todoListState)

  return (
    <Box>
      <AddTodoButtonWrapper >
        <TodoAddButton />
      </AddTodoButtonWrapper>
      <List sx={{ml:1}}>
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
  zIndex:2,
  position: 'sticky',
  top: 0,
  backgroundColor:'white',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'right',
})
