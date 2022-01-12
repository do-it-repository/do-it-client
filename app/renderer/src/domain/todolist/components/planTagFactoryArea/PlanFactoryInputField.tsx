import React from 'react'
import TextField from '@mui/material/TextField'

interface PlanFactoryInputFieldParam {
  planname: any
  onChange: any
  onEnter: any
}

const PlanFactoryInputField = ({
  planname,
  onChange,
  onEnter,
}: PlanFactoryInputFieldParam): any => {
  return (
    <div onKeyDown={onEnter}>
      <TextField
        id="PlanInput"
        name="planname"
        onChange={onChange}
        value={planname}
        autoComplete="off"
        variant="standard"
        color="warning"
        size="small"
        label="Plan creator"
        placeholder="플랜을 입력하고 엔터"
        focused
      />
    </div>
  )
}

export default PlanFactoryInputField
