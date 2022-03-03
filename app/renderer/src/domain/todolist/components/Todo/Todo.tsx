import React, { useState, useRef, useEffect } from 'react'
import { Box } from '@mui/material'
import { List, ListItemText, Divider, TextField ,Tooltip, Checkbox } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'
import NativeSelect from '@mui/material/NativeSelect'
import { styled } from '@mui/material'

import { useRecoilState } from 'recoil'
import { todoListState,newPlanState, newTodoState } from '../../../../common/atom/state'
import BasicSpeedDial from '../../../../common/components/BasicSpeedDial'

import TodoType, { SubTodoType,TodoPropType, PrimaryPropType, SubTodoPropType } from '../../types'
import { fontWeight } from '@mui/system'

const SubTodo = ({subTodo, todo}: any) => {
  const {plan, isDone} = subTodo
  const [todoList,setTodoList] = useRecoilState(todoListState)
   
  useEffect(()=> {
    const isDoneTodoList = todoList.map(currTodo=> 
      {
      var objMain = {mainId: currTodo.id , SubList: currTodo.subTodoList.map(currSubTodo => {
        var objSub = currSubTodo.isDone
      return objSub}
      )}
      return objMain
    })

    const isTrue = (currentValue: boolean) => currentValue === true
    const isFalse = (currentValue: boolean) => currentValue === false
    for (var isDoneTodo of isDoneTodoList) {
      if ( isDoneTodo.SubList.every(isTrue) === true) {
        setTodoList(todoList.map(currTodo => {
          if (currTodo.id === isDoneTodo.mainId) {
            return {...currTodo,isDoneMain:true}
          }
          else {return (currTodo)}
        }
          ))
        console.log(isDoneTodo)
      
      }
    }

    
  },[isDone])

   const onCheckedIsDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoList(
      todoList.map(currTodo => {
        if (currTodo.id === todo.id){
          const CT:SubTodoType[] = currTodo.subTodoList.map(
            currSubTodo => {
              if (currSubTodo.id === subTodo.id) {
                return ({...currSubTodo,isDone:!isDone})
              }
              else {return (currSubTodo)}
            }
          )
          return ({...currTodo,subTodoList:CT})
        }
        else {return currTodo}
      })
    )
  }

          return (
            <Box >
              <Checkbox color='secondary' checked={isDone} onChange={onCheckedIsDone} />
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

    const [isActive,setIsActive] = useState<boolean>(false)
    const wrapperRef = useRef(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewPlan(e.target.value)
      setModTodo({...modTodo, plan:e.target.value })
    }

    const onEnterUpdate = (e: React.KeyboardEvent<HTMLInputElement>) => {
      
      if (e.key === 'Enter') {
        setTodoList(
          todoList.map(currTodo =>
            currTodo.id === id ? {...currTodo, plan:newPlan } : currTodo 
          ))
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
    
    const [todoList,setTodoList] = useRecoilState(todoListState)

    const onCheckedMain = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoList(
        todoList.map(currTodo => {
          if (currTodo.id === todo.id) {
            return ({...currTodo,isDoneMain:!currTodo.isDoneMain})
          }
          else {return (currTodo)}
        })
      )  
    }

    return (
      <Box>
        <StyledBadge badgeContent={`${durationHour}시간`} color="primary">
          <Category/>
          </StyledBadge>
        <Box  sx={{ marginTop: 1, fontWeight: 'bold' }}>
          <Checkbox checked={todo.isDoneMain} onChange={onCheckedMain}/>
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
