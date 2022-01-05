import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { defaultTodoPlan } from './constant'
import { TodoPlanType } from './type'
import IconSpeedDial from './IconSpeedDial'

function TodoListItemCreator({ todo, onDelete }: any): JSX.Element {
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
        <IconSpeedDial todo={todo} onDelete={onDelete} />
      </ListItem>
      <Divider
        // variant="inset"
        component="li"
      />
    </Box>
  )
}

export default function TodoList(): JSX.Element {
  const [todoList, setTodoList] = useState<TodoPlanType[]>(defaultTodoPlan)

  const onDelete = (id: any) =>
    setTodoList(todoList.filter((todo: any) => todo.id !== id))

  return (
    <List>
      <Stack spacing={1}>
        {todoList.map((todo: any) => (
          <TodoListItemCreator todo={todo} key={todo.id} onDelete={onDelete} />
        ))}
      </Stack>
    </List>
  )
}
