import React, { useEffect, useRef } from 'react'
import tw from 'twin.macro'

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

const Section = ({ name, fullPage, centered, children, noFade }) => {
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
      id={name}
      css={styles.section(fullPage, centered)}
      ref={sectionRef}
    >
      {children}
    </section>
  )
}

const styles = {
  section: (fullPage, centered) => [
    fullPage && tw`min-h-screen`,
    centered && tw`flex justify-center flex-col`,
  ]
}

export default Section
