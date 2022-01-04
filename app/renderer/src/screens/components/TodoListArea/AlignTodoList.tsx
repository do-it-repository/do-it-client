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

function TodoList({ todoListObj }: any): JSX.Element {
  return (
    <Box>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={todoListObj.planname}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {todoListObj.category}
              </Typography>
              {`  ${todoListObj.durationHour}시간`}
              {`${todoListObj.detailedText}`}
            </React.Fragment>
          }
        />
        <IconSpeedDial />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  )
}

function TodoListCreator({ todoListState }: any): JSX.Element {
  return (
    <List>
      {todoListState.map((listObj: any) => (
        <TodoList todoListObj={listObj} key={listObj.id} />
      ))}
    </List>
  )
}

export function AlignTodoList(): JSX.Element {
  const [todoList, setTodoList] = useState<TodoPlanType[]>(defaultTodoPlan)
  return <TodoListCreator todoListState={todoList} />
}
