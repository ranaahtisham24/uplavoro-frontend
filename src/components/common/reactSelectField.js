import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useController, Controller } from "react-hook-form";
import _ from "lodash";

const ReactSelectField = React.forwardRef((props, ref = null) => {
  const [focusState, setFocusState] = useState(false);
  const [inputValue, setInputValue] = useState();
  const {
    title,
    style,
    type,
    errors,
    defaultValue,
    onChange,
    isMulti = false,
    onFocus,
    onBlur,
    capitalize = true,
    menuPlacement,
    isHighLight=false,
    ellipses,
    ...others
  } = props;
  const { field, fieldState,formState } = useController(props);
  
  let err = _.get(errors, props.name);
  const handleInputChange = (e) => {
    if (props.onInputChange) {
      props.onInputChange(e);
    }
    setInputValue(e);
    if (props.handleSelectOption) {
      props.handleSelectOption(e);
    }
  };
  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: !isMulti?46:"100%",
      minHeight: props.minHeight ? props.minHeight : 40,
      maxHeight: "100%",
      boxShadow: "none",
      border: "1px solid #C6C4C4",
      backgroundColor: props?.backgroundColor ? props?.backgroundColor : '#ffffff',
      borderTopLeftRadius: props?.borderTopLeftRadius ? props?.borderTopLeftRadius : '',
      borderBottomLeftRadius: props?.borderBottomLeftRadius ? props?.borderBottomLeftRadius : '',
      borderTopRightRadius: props?.borderTopRightRadius ? props?.borderTopRightRadius : '',
      borderBottomRightRadius: props?.borderBottomRightRadius ? props?.borderBottomRightRadius : '',
    }),
    menu: (provided, state) => ({
      ...provided,
      zIndex: 50,
    }),
  };
  const getOptionLabel = (e) => {
    if (props.getOptionLabel) {
      return props.getOptionLabel(e);
    } else {
      return e[props.showLabel || "label"];
    }
  };

  const onCrossHandler = (event) => {
    // console.log(
    //   "🚀 ~ file: ReactSelectField.js:47 ~ onCrossHandler ~ event",
    //   event
    // );
  };

  return (
    <>
        <Controller
          name={props?.name}
          rules={props?.rules}
          control={props?.control}
          defaultValue={defaultValue}
          render={({ field: { onChange } }) => (
            <Select
              {...field}
              {...others}
              ref={ref || field.ref}
              components={ props?.CustomOption && { Option: props?.CustomOption}}

              isLoading={props.isLoading || false}
              noOptionsMessage={() => null}
              getOptionLabel={getOptionLabel}
              styles={customStyles}
              isSearchable={true}
              options={props?.optionData}
              placeholder=""
              menuPlacement={menuPlacement || "auto"}
              className={`bg-white placeholder:text-black 
                            placeholder:font-normal 
                            placeholder:text-base ui-control-input focus:border-teal-c-900 rounded-md ${
                              capitalize && "capitalize"
                            }`}
              isClearable={true}
              defaultOptions
              onChange={(val, action) => {
                onChange(val);
                if (props.onChange) {
                  props.onChange(val, action);
                }
              }}
              value={field.value}
              menuIsOpen={props.menuIsOpen || undefined}
              onFocus={() => {
                setFocusState(true);
                if (props.onFocus) {
                  props.onFocus(e);
                }
              }}
              onBlur={(e) => {
                field.onBlur;
                setFocusState(false);
                if (props.onBlur) {
                  props.onBlur(e);
                }
              }}
              isDisabled={props.isDisabled}
              onInputChange={handleInputChange}
              getOptionValue={(option) => option[props.showLabel || "label"]} // changes here!!!
              // styles={customStyles}
              onMenuClose={() => onCrossHandler()}
              isOptionDisabled={(option) => option.disabled}
              isMulti={isMulti}
              {...others}
            />
          )}
        />
      {props.rules && err && props.rules && err?.message ? (
        <p className=" text-xs text-red-600 h-3" id="email-error">
          {props.rules && err && props.rules && err?.message}
        </p>
      ) : (
        ""
      )}
    </>
  );
});

ReactSelectField.displayName = "ReactSelectField";

export default ReactSelectField;