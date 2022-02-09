import React from 'react'
import { SubTodoType, SubTodoPropType } from '../../types'
import { Box, ListItem, ListItemText } from '@mui/material'
import { Divider } from '@mui/material'

export default function SubTodo({ subTodoList }: SubTodoPropType): JSX.Element {
  return (
    <Box sx={{ marginTop: 3 }}>
      {subTodoList.map((subTodo) => {
        const { id, plan, progress } = subTodo
        return (
          <Box key={id}>
            <p>{plan}</p>
          </Box>
        )
      })}
    </Box>
  )
}
