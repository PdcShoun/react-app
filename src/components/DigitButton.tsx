type Props = {
  digit: string;
  func: any
};

const DigitButton = ({ digit, func }: Props) => {
  const isNumber = !['AC', '+', '-', 'x', '/', '='].includes(digit)
  return (
      <button onClick={func} className={`btn btn-large btn-block btn-${isNumber? 'warning': 'info'} w-100 h-100`}>{digit}</button>
  );
};

export default DigitButton;
