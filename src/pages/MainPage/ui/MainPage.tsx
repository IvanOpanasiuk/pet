import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function MainPage () {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };
  return <div>
      {t('Main page')}
      <Input placeholder='Fill in' value={value} onChange={onChange} />
  </div>;
}

export default MainPage;
