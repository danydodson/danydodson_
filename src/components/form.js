import React from 'react'
import { Button } from '../components'
import { useForm } from '../hooks'

import 'twin.macro'

const Form = () => {

  const sendMessage = () => {
    console.log(values)
  }

  const { values, handleChange, handleSubmit } = useForm(sendMessage)

  return (
    <form
      tw='flex flex-col mb-4'
      onSubmit={handleSubmit}
    >

      <div tw='flex flex-col mb-4'>
        <label tw='mb-2 text-lg' htmlFor='email'>Email Address</label>
        <input type='email' name='email' id='email' autoComplete='email' onChange={handleChange} required />
      </div>

      <div tw='flex flex-col mb-4'>
        <label tw='mb-2 text-lg' htmlFor='message'>Message</label>
        <input type='text' name='message' id='message' autoComplete='off' onChange={handleChange} required />
      </div>

      <Button type='submit' variant='primary'>
        Send
      </Button>

    </form>
  )
}

export default Form
