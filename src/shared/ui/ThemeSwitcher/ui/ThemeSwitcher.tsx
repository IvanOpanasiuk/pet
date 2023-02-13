import { Theme, useTheme } from 'app/providers/ThemeProvider'
import classNames from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface Props {
  className?: string
}

export const ThemeSwitcher = (props: Props) => {
  const { theme, toggleTheme } = useTheme()
  return (
      <div className={classNames(styles.ThemeSwitcher)}>
          <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
              {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
          </Button>
      </div>
  )
}
