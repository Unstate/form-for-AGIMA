import { ChangeEvent, useState } from 'react'

export interface IBind {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export interface IReturnInputData {
    value:string
    reset: () => void
    bind: IBind
}

export const useTextarea = (initial: string):IReturnInputData => {
  const [value, setValue] = useState<string>(initial)

  const reset = (): void => {
    setValue('')
  }

  const bind = {
    value,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)
  }

  return { value, reset, bind }
}