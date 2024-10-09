'use client'

import { type FC, useCallback, useMemo, useRef, useState } from 'react'
import { Box, Menu, MenuItem } from '@mui/material'
import { Icon } from './Icon'
import { usePathname } from 'next/navigation'

/* TODO: Запрещен импорт из вышестоящих слоёв.
 * Shared - самый нижний слой.
 * В папку Views можно импортировать что угодно из shared, но в shared
 * ничего нельзя импортировать из views.
 * Все UI компоненты из папки shared - универсальные и должны
 * иметь возможность использоваться в любой части приложения
 * и не должны быть привязаны ни к какому стороннему контексту, но могут
 * иметь свой контекст, если компонент сложный.
 *
 * Нельзя импортировать context из папки Views сюда. Views - вышестоящий слой.
 *
 * Этот компонент должен быть универсальным: принимать список страниц и
 * callback функцию. В эту функцию передавать текущую выбранную страницу.
 * */

type MenuValue = { label: string; value: string }

interface MenuBtnProps {
    onChange?: (currentValue: MenuValue) => void
    items: readonly MenuValue[]
}

export const MenuBtn: FC<MenuBtnProps> = (props) => {
    const { onChange, items = [] } = props
    const pathName = usePathname()
    const [open, setOpen] = useState(false)
    const [state, setState] = useState(() =>
        items?.map((el) => ({
            ...el,
            active: el.value === pathName,
        })),
    )

    const ref = useRef<HTMLElement | null>(null)
    const openMenu = useCallback(() => setOpen(true), [])

    const changeSelectedItem = (value: string) => {
        setState((p) =>
            p.map((el) => ({
                ...el,
                active: el.value === value,
            })),
        )
    }

    const activeLabel = useMemo(
        () => (state.find((el) => el.active) as MenuValue).label,
        [state],
    )

    return (
        <Box ref={ref} sx={{ position: 'relative', display: 'inline-block' }}>
            <Icon onClick={openMenu} label={activeLabel} />

            <Menu anchorEl={ref.current} open={open}>
                {state.map(({ value, label, active }) => {
                    return (
                        <MenuItem
                            key={label}
                            selected={active}
                            onClick={() => {
                                changeSelectedItem(value)
                                setOpen(false)
                                onChange?.({ value, label })
                            }}
                        >
                            {label}
                        </MenuItem>
                    )
                })}
            </Menu>
        </Box>
    )
}
