import { ChangeEvent, useState } from 'react'

export interface IBind {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface IReturnInputData {
    value:string
    reset: () => void
    bind: IBind
}

export const useInput = (initial: string):IReturnInputData => {
  const [value, setValue] = useState<string>(initial)

  const reset = (): void => {
    setValue('')
  }

  const bind = {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  }

  return { value, reset, bind }
}