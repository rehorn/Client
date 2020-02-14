import React, { useMemo, useCallback } from 'react';
import { TagComponent } from '../type';
import { LayoutCol } from '../Col/shared';
import { useLayoutFormData } from '@shared/components/layout/hooks/useLayoutFormData';
import { Select } from 'antd';
import { Label } from '../Input/shared';
import { BaseTypeRow } from '../Base/shared';
const Option = Select.Option;

interface TagProps {
  name: string;
  options: string | string[];
}
export const TagSelectEdit: TagComponent<TagProps> = React.memo((props) => {
  const { label, stateValue, setStateValue } = useLayoutFormData(props);

  const opt: string[] = useMemo(() => {
    const options = props.options;
    if (typeof options === 'string') {
      return options.split(',');
    }

    return options;
  }, [props.options]);

  const handleChange = useCallback(
    (value) => {
      setStateValue(value);
    },
    [setStateValue]
  );

  return (
    <BaseTypeRow key={props.key}>
      <LayoutCol span={6}>
        <Label title={label} />
      </LayoutCol>
      <LayoutCol span={18}>
        <Select
          style={{ width: '100%' }}
          placeholder="请选择..."
          allowClear={true}
          value={stateValue}
          onChange={handleChange}
        >
          {opt.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </LayoutCol>
    </BaseTypeRow>
  );
});
TagSelectEdit.displayName = 'TagSelectEdit';