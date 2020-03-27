import React, { ChangeEvent, RefObject } from 'react';
import { Label } from '../../elements/Label';
import CheckboxWrapper from './CheckboxWrapper';
import { CSSProperties } from 'styled-components';

type Props = {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => any;
  containerRef?: RefObject<HTMLDivElement> | null;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
};

const Checkbox = ({
  label,
  id,
  onChange,
  containerRef = null,
  className = '',
  style = {},
  disabled = false,
  ...rest
}: Props) => {
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>): any =>
    onChange(e.target.checked);

  return (
    <CheckboxWrapper className={className} style={style} ref={containerRef}>
      <input type="checkbox" id={id} onChange={onCheckboxChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
