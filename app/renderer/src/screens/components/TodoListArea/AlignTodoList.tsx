import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import defaultTodoPlan from './constant'

export default function TodoLists(): JSX.Element {
  const [todoList, setTodoList] = useState(defaultTodoPlan)

  function TodoList(todoListObj: any): JSX.Element {
    return (
      <Box>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={todoListObj.name}
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
                {`예상 소요 시간 : ${todoListObj.durationHour}시간 | detail : ${todoListObj.detailedText}`}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </Box>
    )
  }

  function TodoListCreator(todoListState: any): JSX.Element {
    return (
      <List sx={{ width: '100%', maxWidth: 600 }}>
        {todoListState.map((ListObj: any) => (
          <TodoList todoListObj={ListObj} />
        ))}
      </List>
    )
  }

  return <TodoListCreator todoListState={todoList} />
}

// 렌더링 안되는 문제 파악됨 : defaultPlanList의 리스트 원소 오브젝트들이 TodoList 컴포넌트에 정상적으로 읽혀오고 있지 않음. state - todoList에 저장된 녀석을 어떻게 불러야하는지가 관건
