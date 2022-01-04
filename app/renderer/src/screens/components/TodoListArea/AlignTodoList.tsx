import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { defaultTodoPlan } from './constant'
import { TodoPlanType } from './type'
import IconSpeedDial from './IconSpeedDial'

function TodoList({ todo }: any): JSX.Element {
  useState
  return (
    <Box>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={todo.planname}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {todo.category}
              </Typography>
              {`  ${todo.durationHour}시간`}
              {`${todo.detailedText}`}
            </React.Fragment>
          }
        />
        <IconSpeedDial props={todo} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  )
}

function TodoListCreator({ todoList }: any): JSX.Element {
  return (
    <List>
      {todoList.map((todo: any) => (
        <TodoList todo={todo} key={todo.id} />
      ))}
    </List>
  )
}

export function AlignTodoList(): JSX.Element {
  const [todoList, setTodoList] = useState<TodoPlanType[]>(defaultTodoPlan)
  return <TodoListCreator todoList={todoList} />
}
