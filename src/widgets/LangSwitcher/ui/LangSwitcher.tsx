import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface Props {
  className?: string;
};

export const LangSwitcher = ({ className }: Props) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ukr' : 'en');
  };

  console.log(className, 'className');

  return (
      <Button
          className={classNames('', {}, [className])}
          theme={ThemeButton.CLEAR}
          onClick={toggle}
        >
          {t('Language')}
      </Button>
  );
};
