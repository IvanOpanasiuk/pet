import { useState } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import styles from './Sidebar.module.scss'

interface Props {
  className?: string
}

export const Sidebar = (props: Props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
      <div
          className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
            className
          ])}
        >
          <Button onClick={onToggle}>toogle</Button>
          <div className={styles.Switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={styles.Lang} />
          </div>
      </div>
  )
}
