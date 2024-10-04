'use client'

import { type FC, useCallback, useEffect, useRef, useState } from 'react'
import { Box, Menu, MenuItem } from '@mui/material'
import { useOutsideClick } from '@/shared/hooks/useOutsideClick'
import { Icon } from '@/shared/ui/Menu/ui/Icon'

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

    const [open, setOpen] = useState(false)
    const [state, setState] = useState(() =>
        items?.map((el, i) => ({ ...el, active: i === 0 })),
    )

    useOutsideClick({
        onClose: () => setOpen(false),
        handler: open,
    })

    const ref = useRef<HTMLElement | null>(null)

    const getSelectedItem = useCallback(() => {
        const { label, value } = state.find((el) => el.active) as MenuValue
        return { label, value }
    }, [state])

    const changeSelectedItem = (value: string) => {
        setState((p) =>
            p.map((el) => ({
                ...el,
                active: el.value === value,
            })),
        )
    }

    useEffect(() => {
        onChange?.(getSelectedItem())
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [state])

    return (
        <Box ref={ref} sx={{ position: 'relative', display: 'inline-block' }}>
            <Icon
                onClick={() => setOpen(true)}
                label={getSelectedItem()?.label}
            />
            <Menu anchorEl={ref.current} open={open}>
                {state.map(({ value, label, active }) => {
                    return (
                        <MenuItem
                            key={label}
                            selected={active}
                            onClick={() => changeSelectedItem(value)}
                        >
                            {label}
                        </MenuItem>
                    )
                })}
            </Menu>
        </Box>
    )
}
