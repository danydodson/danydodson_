import React from 'react'
import tw from 'twin.macro'
import { Button } from '.'
import { useForm } from '../hooks'

const Form = () => {

  const sendMessage = () => {
    console.log(values)
  }

  const { values, handleChange, handleSubmit } = useForm(sendMessage)

  return (
    <section>

      <form tw='flex flex-col mb-4' onSubmit={handleSubmit}>

        <div tw='flex flex-col mb-6'>
          <label tw='mb-2 text-lg text-gray-600' htmlFor='email'>Email Address</label>
          <input css={styles.container()} type='email' name='email' id='email' autoComplete='email' onChange={handleChange} required />
        </div>

        <div tw='flex flex-col mb-6'>
          <label tw='mb-2 text-lg text-gray-600' htmlFor='message'>Message</label>
          <textarea css={styles.container()} type='text' name='message' id='message' autoComplete='off' onChange={handleChange} required />
        </div>

        <Button type='submit' variant='primary'>
          Send
        </Button>

      </form>
    </section>
  )
}

export default Form

const styles = {
  container: () => [
    tw`block border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none`
  ],
}