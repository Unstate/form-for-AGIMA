import React from 'react'
import classes from './TextField.module.css'

interface TextFieldProps {
    index: number;
    title: string
    description: string[]
}

const TextField:React.FC<TextFieldProps> = ({index,title,description}) => {
  return (
    <div>
        <div className={classes.title}>
            <p>{index + 1}.</p>
            <p>{title}</p>
        </div>
        <div className={classes.descriptionContainer}>{description.map((question,index) => <p key={index}>{question}</p>)}</div>
    </div>
  )
}

export default TextField