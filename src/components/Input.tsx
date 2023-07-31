import classnames from 'classnames';
import { useState, useImperativeHandle, forwardRef, useRef, useEffect } from 'react';
import { ChangeHandler } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

type Props = {
  type?: string;
  size?: string;
  status?: string;
  fancyOutlined?: boolean;
  fancyBackgroundColor?: string;
  outlined?: boolean;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
  leftIcon?: any;
  rightIcon?: any;
  rounded?: Array<number>;
  value?: string;
  onChange?: ChangeHandler;
  visibilityToggle?: boolean;
  onBlur?: ChangeHandler;
  onFocus?: ChangeHandler;
  name?: string;
  placeholder?: string;
  style?: any;
  label: string;
  alternativeValue?: string;
};
export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>((props, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [currentType, setCurrentType] = useState<string | undefined>(props.type);
  const [stickyLabel, setStickyLabel] = useState<boolean>(!!props.value);

  const inputRef = useRef<Ref>(null);

  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useImperativeHandle(ref, () => inputRef.current!);

  const handleChange = (e: any) => {
    if (props.onChange) {
      props.onChange(e);
    }

    // Non-empty input
    if (e.target.value && !stickyLabel) {
      setStickyLabel(true);
    }

    // Empty input
    if (!e.target.value && stickyLabel) {
      setStickyLabel(false);
    }
  };

  useEffect(() => {
    if ((props.value || props.alternativeValue) && !stickyLabel) {
      setStickyLabel(true);
    }
    if (!props.value && !props.alternativeValue && stickyLabel && !inputRef.current?.value) {
      setStickyLabel(false);
    }
  }, [props.value, props.alternativeValue, stickyLabel]);

  return (
    // Container
    <div
      className={classnames(
        'flex items-center gap-2 px-4 h-11 text-md rounded-lg focus-within:outline focus-within:outline-2 outline-ac_blue relative',

        // Size
        props.size === 'large' && 'h-12 text-lg',

        // Status
        !props.disabled && {
          'outline-1 outline': props.status,
          'outline-ac_red': props.status === 'error',
          'outline-ac_yellow': props.status === 'warning',
        },

        // Appearance
        {
          'bg-bg_light_gray_2': !props.outlined && !props.fancyOutlined,
          'bg-transparent border-br_light_gray border-[1px]': props.outlined || props.fancyOutlined,
        },

        // Cursor
        props.type === 'text' && !props.disabled && 'cursor-text',

        // Disabled
        props.disabled && 'bg-bg_light_gray_2 border-br_light_gray border-[1px]',
      )}
      style={{
        width: props.width,
        height: props.height,
        borderTopLeftRadius: props?.rounded?.at(0),
        borderTopRightRadius: props?.rounded?.at(1),
        borderBottomRightRadius: props?.rounded?.at(2),
        borderBottomLeftRadius: props?.rounded?.at(3),
      }}
      onClick={handleWrapperClick}
    >
      {props.leftIcon && <div>{props.leftIcon}</div>}

      {/* Real input */}
      <input
        // {...props}
        className="outline-none bg-transparent flex-1 max-w-full overflow-hidden peer"
        disabled={props.disabled}
        value={props.value}
        type={currentType}
        onChange={handleChange}
        onBlur={props.onBlur ?? undefined}
        onFocus={props.onFocus ?? undefined}
        name={props.name ?? undefined}
        ref={inputRef}
        placeholder={props.fancyOutlined ? undefined : props.placeholder}
        style={{
          ...props.style,
          color: props.disabled ? '#A9A7AC' : '#333333',
        }}
      />

      {/* Show/Hide password */}
      {props.visibilityToggle && (
        <button
          type="button"
          onClick={() => {
            setShowPassword(!showPassword);
            setCurrentType(currentType === 'password' ? 'text' : 'password');
          }}
        >
          {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      )}
      {!props.leftIcon && !props.visibilityToggle && props.rightIcon && (
        <div className="flex-shrink-0">{props.rightIcon}</div>
      )}

      {/* Label */}
      {props.fancyOutlined && (
        <label
          className="absolute text-t_light_gray_2 px-1 -mx-1 peer-focus:top-0 peer-focus:text-sm top-1/2 -translate-y-1/2 transition-all"
          style={{
            backgroundColor: props.fancyBackgroundColor,
            top: stickyLabel || props.type === 'date' ? '0' : undefined,
            fontSize: stickyLabel || props.type === 'date' ? '12px' : undefined,
          }}
        >
          {props.label}
        </label>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
