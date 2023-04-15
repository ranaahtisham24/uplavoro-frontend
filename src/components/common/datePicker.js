import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useController, Controller } from "react-hook-form";
import _ from "lodash";

const DatePickerFeild = React.forwardRef((props, ref) => {
  const [focusState, setFocusState] = useState(false);
  const {
    title,
    style,
    type,
    errors,
    defaultValue,
    isDisabled,
    dateTime = true,
    customStyles,
    onChange,
    maxDate,
    isHighLight=false,
    ...others
  } = props;
  const { field, fieldState } = useController(props);
  let err = _.get(errors, props.name);
  // const inputRef = useRef(null);
  // useEffect(() => {
  //     inputRef.current.setOpen(false)
  // }, [])
  return (
    <>
      <div
        className={`h-[46px] flex items-center relative ${
          customStyles && customStyles
        } border border-[#C6C4C4] bg-white  outlineStyle rounded  ${
          props.rules && err
            ? "focus-within:border-red-600 border-red-600"
            : "focus-within:border-teal-c-900"
        }
        ${isHighLight && " bg-highLight  "}

        `}
      >
        <label
          htmlFor="name"
          className={` z-10 pointer-events-none absolute bg-white left-2 -mt-px inline-block  px-2  ${
            props.rules && err ? "text-red-600" : "text-gray-600"
          } ${
            focusState || field?.value
              ? "-top-2 duration-300 text-xs rounded-lg"
              : "top-1.5 duration-200 text-base font-normal"
          }
          ${isHighLight && " bg-highLight  "}

          `}
        >
          {title}{" "}
          {props?.rules?.required?.value === true && (
            <span className="text-red-500 mt-10">*</span>
          )}
        </label>
        <Controller
          autoFocus={false}
          name={props?.name}
          control={props?.control}
          rules={props?.rules}
          defaultValue={defaultValue}
          render={({ field: { ref } }) => {
            function validDate(x) {
              let y = new Date(x);
              return y instanceof Date && !isNaN(y);
            }
            let updateDate = new Date(field?.value);
            if (!validDate(field?.value)) {
              updateDate = "";
            }
            return (
              <DatePicker
                {...field}
                ref={(elem) => {
                  elem && ref(elem.input);
                }}
                autoComplete="off"
                autoFocus={false}
                showTimeInput={dateTime}
                showTimeSelectOnly={props.showTimeSelectOnly}
                onChange={(e) => {
                  field.onChange(e);
                  if (onChange) {
                    onChange(e, props?.name);
                  }
                }}
                selected={updateDate}
                //new change for handling reset (start)
                value={defaultValue}
                //(end)
                onFocus={() => setFocusState(true)}
                onBlur={() => {
                  field.onBlur;
                  setFocusState(false);
                }}
                dateFormat={dateTime ? "MM/dd/yyyy h:mm aa" : "MM/dd/yyyy"}
                className={`block py-1 px-3 h-full w-full appearance-none relative focus:outline-none bg-transparent focus:ring-0 font-normal text-base text-black-c-400 ${isDisabled ? 'opacity-50' : ''}                     ${isHighLight && " focus:bg-highLight   "}                `}
                placeholder={props.placeholder ? props.placeholder : ""}
                disabled={isDisabled}
                maxDate={props?.maxDate}
                minDate={props?.minDate}

                {...others}
              />
            );
          }}
        />

        {/*  */}
      </div>
      {props.rules && err && (
        <p className=" text-xs text-red-600 h-3" id="email-error">
          {props.rules && err && props.rules && err.message}
        </p>
      )}
    </>
  );
});

DatePickerFeild.displayName = "DatePickerFeild";

export default DatePickerFeild;