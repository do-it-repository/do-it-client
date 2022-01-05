import React from 'react'
import PlanFactory from './components/planTagFactoryArea/PlanFactory'
import TodoList from './components/TodoListArea/TodoList'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const WallPaper = styled('div')({
  position: 'absolute',
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

const WidgetPlanFactory = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}))

const WidgetTodoList = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 40,
  width: 650,
  height: 700,
  maxWidth: '100%',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(60px)',
}))

export default function ToDoList() {
  return (
    <Box sx={{ m: 2 }}>
      <WallPaper />
      <Grid container direction="row" spacing={10}>
        <Grid key={1} item>
          <WidgetPlanFactory>
            <PlanFactory />
          </WidgetPlanFactory>
        </Grid>
        <Grid key={2} item>
          <WidgetTodoList>
            <TodoList />
          </WidgetTodoList>
        </Grid>
      </Grid>
    </Box>
  )
}
