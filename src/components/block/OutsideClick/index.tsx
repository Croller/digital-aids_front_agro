import React, { useRef, useEffect } from 'react'

interface IOutSideClick {
  children: React.ReactNode
  onClickOutSide: () => void
}

export const OutsideClick: React.FC<IOutSideClick> = ({ children, onClickOutSide }) => {
  const ref = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = (event: any): void => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutSide()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return <div ref={ref}>{children}</div>
}
