type Props = {
  digit: string;
};

const DigitButton = ({ digit }: Props) => {
  return (
    <div className="col btn-block">
      <button className="btn btn-large btn-block btn-warning w-100 h-100">{digit}</button>
    </div>
  );
};

export default DigitButton;
