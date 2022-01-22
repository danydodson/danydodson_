import React from 'react'
import { EmailIcon, FacebookIcon, TwitterIcon } from 'react-share'
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from 'react-share'

const ShareButtons = ({ location, quote, hashtag }) => (
  <div tw='flex justify-end items-center my-1 mx-2'>
    <EmailShareButton url={location} subject={quote}>
      <EmailIcon round size={32} />
    </EmailShareButton>
    <FacebookShareButton url={location} quote={quote} hashtag={hashtag}>
      <FacebookIcon round size={32} />
    </FacebookShareButton>
    <TwitterShareButton url={location} title={quote} hashtag={hashtag}>
      <TwitterIcon round size={32} />
    </TwitterShareButton>
  </div>
)

export default ShareButtons
