import React, { memo, useState } from 'react'
import {
  Wrapper,
  Item,
  Image,
  Name,
  List
} from './styled'
import { OutsideClick } from '@/components/block/OutsideClick'

type TItem = { key: string, name: string, image: string }

interface IStyle {
  source: TItem[]
  onChange: (key: string) => void
}

export const Style: React.FC<IStyle> = memo(({ source, onChange }) => {
  const [show, setShow] = useState<boolean>(false)
  const [current, setCurrent] = useState<TItem>(source[0])

  const onClick = (item: TItem): void => {
    setShow(false)
    setCurrent(item)
    onChange(item.key)
  }

  return (
    <OutsideClick onClickOutSide={() => { setShow(false) } }>
      <Wrapper onClick={() => { setShow(true) } }>
        <Item>
          <Image src={current.image} />
          <Name>
            {current.name}
          </Name>
        </Item>
        <List show={show}>
          {source.map((item) => (
            <Item key={item.key} onClick={() => { onClick(item) }}>
              <Image src={item.image} />
              <Name>
                {item.name}
              </Name>
            </Item>
          ))}
        </List>
      </Wrapper>
    </OutsideClick>
  )
})
