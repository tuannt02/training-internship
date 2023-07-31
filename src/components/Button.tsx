import classnames from 'classnames';

type Props = {
  children: string | React.ReactNode;
  className?: string;
  color?: any;
  type: 'primary' | 'outline' | 'default' | 'danger' | 'disabled' | 'text' | 'plain';
  size: 'normal' | 'large';
  shape: 'rectangle' | 'circle';
  onClick?: () => {};
  disabled?: boolean;
  unpdx?: boolean;
  width?: number | string;
  height?: number | string;
  rounded?: Array<number>;
  justifyBetweenContent?: boolean;
};

const TYPES = ['primary', 'outline', 'default', 'danger', 'disabled', 'text', 'plain'];
const SIZE = ['normal', 'large'];
const SHAPE = ['rectangle', 'circle'];

const Button = ({
  children,
  className,
  color,
  type,
  size,
  shape,
  onClick,
  disabled,
  unpdx = false,
  width,
  height,
  rounded = [],
  justifyBetweenContent = false,
}: Props) => {
  // Check validity of props
  const checkType = disabled ? '' : TYPES.includes(type) ? type : TYPES[0];
  const checkSize = SIZE.includes(size) ? size : SIZE[0];
  const checkShape = SHAPE.includes(shape) ? shape : SHAPE[0];

  return (
    <button
      className={classnames(
        // General
        'transition duration-300 flex items-center justify-center gap-2',

        // Custom for dropdpown
        {
          'justify-between': justifyBetweenContent,
        },

        // Unpadding x
        {
          '!px-0': unpdx,
        },

        // Type
        {
          'bg-ac_blue text-white hover:bg-opacity-90': checkType === 'primary',
          'border-[1px] border-ac_blue text-ac_blue hover:bg-ac_blue hover:text-white': checkType === 'outline',
          'border-[1px] border-br_light_gray hover:bg-br_light_gray': checkType === 'default',
          'text-t_dark': ['default', 'text'].indexOf(checkType) !== -1,
          'text-ac_red border-[1px] border-ac_red hover:bg-ac_red hover:text-white': checkType === 'danger',
          'bg-white hover:bg-gray-100': checkType === 'plain',
        },

        // Size
        {
          'text-md': checkSize === 'normal',
          'text-lg': checkSize === 'large',
          'h-11': checkSize === 'normal' && !height,
          'h-12': checkSize === 'large' && !height,
        },

        // Shape
        {
          'rounded-md px-4': checkShape === 'rectangle',
          'rounded-full aspect-square': checkShape === 'circle',
        },

        // Special
        disabled && 'cursor:default pointer-events-none text-t_light_gray_3',
        disabled && type !== 'text' && 'bg-bg_primary',

        className,
      )}
      onClick={!disabled ? onClick : undefined}
      style={{
        width: width,
        height: height,
        borderTopLeftRadius: rounded[0],
        borderTopRightRadius: rounded[1],
        borderBottomRightRadius: rounded[2],
        borderBottomLeftRadius: rounded[3],
        color: color,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
