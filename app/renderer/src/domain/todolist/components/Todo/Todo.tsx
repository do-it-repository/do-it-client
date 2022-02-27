import React, { useState, useRef, useEffect } from 'react'
import { Box } from '@mui/material'
import { List, ListItemText, Divider, TextField ,Tooltip, Checkbox } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'
import NativeSelect from '@mui/material/NativeSelect'
import { styled } from '@mui/material'

import { useRecoilState } from 'recoil'
import { todoListState,newPlanState, newTodoState } from '../../../../common/atom/state'
import BasicSpeedDial from '../../../../common/components/BasicSpeedDial'

import TodoType, { TodoPropType, PrimaryPropType, SubTodoPropType } from '../../types'
import { fontWeight } from '@mui/system'

const SubTodo = ({subTodo, todo}: any) => {
  const { id, plan, progress } = subTodo
/*   const subId = id
  const [todoList,setTodoList] = useRecoilState(todoListState)
   */
/*   const onCheckedTest = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoList(
        todoList.map(currTodo => {
          if (currTodo.id === id) {
          currTodo.subTodoList.map(currSub => {
            return(
            currSub.id === subId ? {...currTodo, plan: '엥?'} : currTodo
            )})}

          return (currTodo)
        }))}
 */

  const [isDone,setIsDone] = useState(progress.isDone)

          const onChecked = (e:React.ChangeEvent<HTMLInputElement>) => { 
            setIsDone(!isDone)
          }
          return (
            <Box >
              <Checkbox color='secondary' onChange={onChecked} />
              <Box sx={{display:'inline'}}>{plan}</Box>
            </Box>
          )
        }


export default function Todo({ todo }: TodoPropType): JSX.Element {
  const { id, plan, category, durationHour, subTodoList } = todo

  const Category = ():JSX.Element => {
    const wrapperRef = useRef(null)
    const [isActive,setIsActive] = useState<boolean>(false)

    const onClickCat = (e: React.MouseEvent<HTMLInputElement>) => (
      setIsActive(!isActive)
    )

    function clickOutside(
      setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
      ref: any,
    ) {
      useEffect(() => {
        function handleClickOutside(event: any) {
          if (ref.current && !ref.current.contains(event.target)) {
            setIsActive(false)
          }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, [ref])
    }

    clickOutside(setIsActive,wrapperRef)

    if (isActive === true) {
      return (
        <InlineBox ref={wrapperRef}>
            <NativeSelect
              defaultValue={`${category.name}`}
              
              >
                 <option value={`${category.name}`}>{`${category.name}${category.emoji}`}</option>
            </NativeSelect>
        </InlineBox>
      )
    }
    
    return (
      <InlineBox onClick={onClickCat}>
        <InlineBox sx={{ fontWeight: 'bold' }}>
        {`${category.name}`}
        </InlineBox>
        <InlineBox>{`${category.emoji}`}</InlineBox>
      </InlineBox>
    )
  }

  
  const MainPlan = ():JSX.Element => {
    const [newPlan,setNewPlan] = useState<string>(plan)
    const [modTodo,setModTodo] = useState<TodoType>(todo)
    const [todoList,setTodoList] = useRecoilState(todoListState)
    console.log(todoList)

    const [isActive,setIsActive] = useState<boolean>(false)
    const wrapperRef = useRef(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewPlan(e.target.value)
      setModTodo({... modTodo, plan:e.target.value })
    }

    const onEnterUpdate = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        setTodoList(
          todoList.map(currTodo =>
            currTodo.id === id ? {...currTodo, plan: newPlan } : currTodo )
          )
          console.log(todoList)
      }
    }

    const onDbClickPlan = (e:React.MouseEvent<HTMLInputElement>) => {
      setIsActive(!isActive)
    }

    function clickOutside(
      setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
      ref: any,
    ) {
      useEffect(() => {
        function handleClickOutside(event: any) {
          if (ref.current && !ref.current.contains(event.target)) {
            setIsActive(false)
            setNewPlan(plan)
          }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, [ref])
    }

    clickOutside(setIsActive,wrapperRef)
    
    if (isActive === true) {
      return(
      <TextField onKeyDown={onEnterUpdate} onChange={onChange} variant="standard" ref={wrapperRef} size='small' autoFocus={true} value={newPlan} placeholder={plan}/>
      )
      }

    return (
      <Tooltip title='수정을 위해 더블클릭' enterDelay={1000}>
      <InlineBox onDoubleClick={onDbClickPlan} >{plan}</InlineBox>
      </Tooltip>
    )
  }
  
  const Primary = ({
    durationHour,
    category,
    plan, 
  }: PrimaryPropType): JSX.Element => {

    return (
      <Box>
        <StyledBadge badgeContent={`${durationHour}시간`} color="primary">
          <Category/>
          </StyledBadge>
        <Box  sx={{ marginTop: 1, fontWeight: 'bold' }}>
          <MainPlan />
        </Box>
      </Box>
    )
  }

  return (
    <Box>
      <List>
        <ListItemText
          sx={{ marginTop: 3 }}
          primary={
            <Primary
              durationHour={durationHour}
              category={category}
              plan={plan}
            />
          }
        />
        <Box sx={{ marginTop: 3 }}>
          {subTodoList.map((subTodo) => 
            ( <SubTodo subTodo={subTodo} todo={todo} key={subTodo.id}/> )  
      )}

    </Box>
      </List>
      <Divider component="li" />
    </Box>
  )
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -30,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
  cursor: 'pointer'
}))

const InlineBox = styled(Box)({
  display: 'inline',
})
