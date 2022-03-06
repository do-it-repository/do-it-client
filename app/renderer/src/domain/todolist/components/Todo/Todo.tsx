import React, { useState, useRef, useEffect } from 'react'
import { Box } from '@mui/material'
import { Button,IconButton, List, ListItemText, Divider, TextField ,Tooltip, Checkbox } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'
import NativeSelect from '@mui/material/NativeSelect'
import { styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import { useRecoilState } from 'recoil'
import { todoListState,newPlanState, newTodoState } from '../../../../common/atom/state'
import BasicSpeedDial from '../../../../common/components/BasicSpeedDial'

import TodoType, { SubTodoType,TodoPropType, PrimaryPropType, SubTodoPropType } from '../../types'
import { fontWeight } from '@mui/system'

const SubTodo = ({subTodo, todo}: any) => {
  const {plan, isDone, id} = subTodo
  const [todoList,setTodoList] = useRecoilState(todoListState)


  // checkBox isDoneMain <-> isDoneSub 
  useEffect(()=> {
    const isDoneTodoList = todoList.map(currTodo=> 
      {
      var objMain = {mainId: currTodo.id ,mainDone: currTodo.isDoneMain, SubList: currTodo.subTodoList.map(currSubTodo => {
        var objSub = currSubTodo.isDone
      return objSub}
      )}
      return objMain
    })

    const isTrue = (currentValue: boolean) => currentValue === true
    const isFalse = (currentValue: boolean) => currentValue === true
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
      // subTodo isDoneList 모두 false인 경우 isDoneMain false로 전환
      else if ( isDoneTodo.SubList.every(isFalse) === true) {
        setTodoList(todoList.map(currTodo => {
          if (currTodo.id === isDoneTodo.mainId) {
            return {...currTodo,isDoneMain:false}
          }
          else { return (currTodo)}
        }))
      }
// subTodo isdoneList 중 하나라도 true가 아닐경우 isDoneMain false로 전환 : 오류
/*       else if ( isDoneTodo.SubList.every(isTrue) === false ) {
        setTodoList( 
          todoList.map(currTodo => {
            if (currTodo.id===isDoneTodo.mainId) {
              return ({...currTodo,isDoneMain:false})}
            else { return (currTodo)}
          })
        )
      } */
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
        <InlineBox sx={{ml:1}} ref={wrapperRef}>
            <NativeSelect
              defaultValue={`${category.name}`}
              
              >
                 <option value={`${category.name}`}>{`${category.name}${category.emoji}`}</option>
            </NativeSelect>
        </InlineBox>
      )
    }
    
    return (
      <InlineBox sx={{ml:1}} onClick={onClickCat}>
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

    const onKeyEnterUpdate = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        setTodoList(
          todoList.map(currTodo =>
            currTodo.id === id ? {...currTodo, plan:newPlan } : currTodo 
          ))
        }
      }

      const onMouseEnterPlan = (e: React.MouseEvent<HTMLInputElement>) => {
        
      }

    const onClickPlan = (e:React.MouseEvent<HTMLElement>) => {
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
      <TextField sx={{mt:1}} onKeyDown={onKeyEnterUpdate} onChange={onChange} spellCheck={false} variant="standard" ref={wrapperRef} size='small' autoFocus={true} value={newPlan} placeholder={plan}/>
      )}

    return (
      <Tooltip title='수정을 위해 클릭' enterDelay={1000}>
      <Button
      onClick={onClickPlan}
       sx={{ padding:0, color:'black',fontSize:15,fontWeight:'bold', borderRadius:0.1}}>{plan}</Button>
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
            if (currTodo.isDoneMain === true) { 
              const newSTDL = currTodo.subTodoList.map(currSubTodo => {return ({...currSubTodo,isDone:false})})
              return ({...currTodo,isDoneMain:false,subTodoList:newSTDL})}
            else { 
              const newSTDL = currTodo.subTodoList.map(currSubTodo => { return ({...currSubTodo, isDone:true})})
              return ({...currTodo,isDoneMain:true,subTodoList:newSTDL})}
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
    <Box >
      <List>
        <ListItemText
          sx={{ marginTop: 3 }}
          primary={
            <Primary
              durationHour={durationHour}
              category={category}
              plan={plan}
            />}
        />
        <Box sx={{ mt: 3, mb:3 }}>
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
