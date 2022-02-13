import React from 'react'
import TodoPlanner from './domain/todolist/pages/TodoPlanner'
import { Box } from '@mui/material'
import { Mandalart } from './domain/mandalart/components/mandalart/Mandalart'

export default function App() {
  return (
    <Box>
      <TodoPlanner />
      {/* <Mandalart /> */}
    </Box>
  )
}
