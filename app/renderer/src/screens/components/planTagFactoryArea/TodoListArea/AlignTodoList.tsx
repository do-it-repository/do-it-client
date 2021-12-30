import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

export default function AlignTodoList() {
  return (
    <List sx={{ width: '100%', maxWidth: 600 }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="ICT 전략 및 기획 복습"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                ✔ 공부플랜
              </Typography>
              {' - 예상 소요시간 : 3h | ㅈㄴ 어려우니까 열심히하지…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  )
}
