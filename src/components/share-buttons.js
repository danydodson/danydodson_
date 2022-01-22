import React from 'react'
import { FacebookIcon, TwitterIcon } from 'react-share'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import config from '../config'

const ShareButtons = ({ url, title, tags }) => {

  const hashtags = tags.map((t) => t.replace(/[^a-zA-Z0-9]+/g, ''))

  return (
    <div tw='flex justify-end items-center my-1 mx-2'>
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon round size={32} bgStyle={{ fill: 'none' }} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title} via={config.username} hashtags={hashtags}>
        <TwitterIcon round size={32} bgStyle={{ fill: 'none' }} />
      </TwitterShareButton>
    </div>
  )
}

export default ShareButtons
