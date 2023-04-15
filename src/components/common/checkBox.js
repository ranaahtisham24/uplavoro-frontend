import React from "react";
import { useController, Controller } from "react-hook-form";
import _ from "lodash";

const CheckBox = React.forwardRef((props, ref) => {
  const { field, fieldState } = useController(props);
  const { title, style, type, errors, defaultValue, labelClass, disabled, ...others } = props;
  let err = _.get(errors, props.name);

  return (
    <>
      <Controller
        name={props?.name}
        control={props?.control}
        rules={props?.rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
            <div className="flex items-center">
              <label
                className={`cursor-pointer flex gap-x-2 text-base ${labelClass ? labelClass : "text-black"} ${props.rules && errors && err
                  && "text-red-600"
                  } ${props?.disabled ? "text-gray-200 cursor-not-allowed" : ""}`}
              >
                <input
                  {...field}
                  checked={
                    field.value == "1" || field.value === true ? true : false
                  }
                  type="checkbox"
                  disabled={disabled}
                  onChange={(e) => {
                    onChange(e.target.checked);
                    if (props.onChange) {
                      props.onChange(e);
                    }
                  }}
                  style={style ? style : {}}
                  className='min-w-[20px] accent-hero border-gray-300'
                />
                <span className="px-2">
                  {title}
                </span>
              </label>
            </div>
        )}
      />
    </>
  );
});

CheckBox.displayName = "CheckBox";

export default CheckBox;
