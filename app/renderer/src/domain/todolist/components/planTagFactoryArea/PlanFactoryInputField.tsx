import React from 'react'
import TextField from '@mui/material/TextField'

interface PlanFactoryInputFieldParam {
  planname: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const PlanFactoryInputField = ({
  planname,
  onChange,
  onEnter,
}: PlanFactoryInputFieldParam): JSX.Element => {
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
        label="Plan Creator"
        placeholder="플랜을 입력하고 엔터"
      />
    </div>
  )
}

export default PlanFactoryInputField
