import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { defaultTodoPlan } from './constant'
import { TodoPlanType } from './type'

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
              {`  ${todoListObj.durationHour}시간   |   ${todoListObj.detailedText}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  )
}

function TodoListCreator({ todoListState }: any): JSX.Element {
  return (
    <List>
      {todoListState.map((listObj: any, index: any) => (
        <TodoList todoListObj={listObj} key={index} />
      ))}
    </List>
  )
}

export function AlignTodoList(): JSX.Element {
  const [todoList, setTodoList] = useState<TodoPlanType[]>(defaultTodoPlan)
  return <TodoListCreator todoListState={todoList} />
}

// 렌더링 안되는 문제 파악됨 : defaultPlanList의 리스트 원소 오브젝트들이 TodoList 컴포넌트에 정상적으로 읽혀오고 있지 않음. state - todoList에 저장된 녀석을 어떻게 불러야하는지가 관건 & TodoListCreator 컴포넌트의 map 또한 손봐야함 //
