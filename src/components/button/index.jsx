import React from 'react'
import { ButtonContainer } from './styles'

// o {title} é uma props

const Button = ({title, variant="primary", onClick}) => {

  return (
    <ButtonContainer variant={variant} onClick={onClick} >
      {title}
    </ButtonContainer>
  )
}

export {Button}