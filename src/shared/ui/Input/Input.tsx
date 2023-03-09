import { memo, useEffect, useRef, useState, type InputHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface Props extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: true;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: Props) => {
  const {
    value,
    onChange,
    type = 'text',
    className,
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      setIsFocus(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onBlur = () => {
    setIsFocus(false);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };
  return <div className={classNames(styles.InputWrapper)}>
      {placeholder && <div className={styles.placeholder}>
          {`${placeholder}>`}
      </div>}
      <div className={styles.caretWrapp}>
          <input
              type={type}
              ref={ref}
              value={value}
              onChange={handlerOnChange}
              onBlur={onBlur}
              onFocus={onFocus}
              onSelect={onSelect}
              className={styles.input}
              {...otherProps}
            />
          {isFocus && (<span
              className={styles.caret}
              style={{ left: `${caretPosition * 9}px` }}
          />)}
      </div>

  </div>;
});
