import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface Props {
  className?: string;
  short?: boolean;
};

export const LangSwitcher = ({ className, short }: Props) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'uk_UA' : 'en');
  };

  console.log(className, 'className');

  return (
      <Button
          className={classNames('', {}, [className])}
          theme={ButtonTheme.CLEAR}
          onClick={toggle}
        >
          {t(short ? 'Short' : 'Language')}
      </Button>
  );
};
