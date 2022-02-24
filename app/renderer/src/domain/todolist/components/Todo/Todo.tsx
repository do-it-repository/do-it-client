import React, { useState, useRef, useEffect } from 'react'
import { Box } from '@mui/material'
import { List, ListItemText, Divider, TextField } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'
import NativeSelect from '@mui/material/NativeSelect'
import Select from '@mui/material/Select'

import { styled } from '@mui/material'
import RecoilState from 'recoil'
import BasicSpeedDial from '../../../../common/components/BasicSpeedDial'

import { TodoPropType, PrimaryPropType, SubTodoPropType } from '../../types'
import { fontWeight } from '@mui/system'



const SubTodo = ({ subTodoList }: SubTodoPropType): JSX.Element => {
  return (
    <Box sx={{ marginTop: 3 }}>
      {subTodoList.map((subTodo) => {
        const { id, plan, progress } = subTodo
        return (
          <Box key={id}>
            <p>{plan}</p>
          </Box>
        )
      })}
    </Box>
  )
}

export default function Todo({ todo }: TodoPropType): JSX.Element {
  
  const Category = () => {
    const wrapperRef = useRef(null)

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

    const [isActive,setIsActive] = useState<boolean>(false)
    
    const onClickCat = (e: React.MouseEvent<HTMLInputElement>) => (
      setIsActive(!isActive)
    )

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

/*   const Hour = () => {
    const [isActive,setIsActive] = useState<boolean>(false)

    const onClickHour = (e: React.MouseEvent<HTMLInputElement>) => (
      setIsActive(!isActive)
    )
    if (isActive === true) 
    return (
        <TextField size='small'/>
            )
    return (
    <StyledBadge onClick={onClickHour} badgeContent={`${durationHour}시간`} color="primary">
      
    </StyledBadge>
    )
  }
 */
  const { id, plan, category, durationHour, detailedText, subTodoList } = todo

  const MainPlan = ():JSX.Element => {

    const wrapperRef = useRef(null)

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


    const [isActive,setIsActive] = useState<boolean>(false)

    clickOutside(setIsActive,wrapperRef)

    const onDbClickPlan = (e:React.MouseEvent<HTMLInputElement>) => {
      setIsActive(!isActive)
    }
    
    if (isActive === true) {
      return(
      <TextField ref={wrapperRef} size='small' autoFocus={true} value={plan} placeholder='Type your main plan'/>
      )
      }

    return (
      <InlineBox onDoubleClick={onDbClickPlan} >{plan}</InlineBox>
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

        <SubTodo subTodoList={subTodoList} />
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
