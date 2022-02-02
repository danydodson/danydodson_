import React, { useEffect, useRef } from 'react'
import tw, { styled } from 'twin.macro'

const observer = typeof window !== 'undefined'
  ? new window.IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elem = entry.target
          elem.classList.add('fadeIn')
        }
      })
    },
    { threshold: 0.1, }
  )
  : {
    observe() { },
    unobserve() { },
  }

const Section = ({ name, centered, fullPage, children, noFade }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (noFade) {
      return
    }

    const elem = sectionRef.current
    observer.observe(elem)

    return () => observer.unobserve(elem)
  }, [sectionRef, noFade])

  return (
    <section
      css={styles.section(centered, fullPage)}
      id={name}
      ref={sectionRef}
    >
      {children}
    </section>
  )
}

const styles = {
  section: (centered, fullPage) => [
    tw`max-w-4xl my-0 mx-auto`,
    centered && tw`flex items-center justify-center flex-col`,
    fullPage && tw`min-h-screen`,
  ]
}

export default Section
