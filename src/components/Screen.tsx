import './Screen.css'

type Props = {
  value: string;
};

const Screen = ({ value }: Props) => {
  return (
    <div className="col d-flex flex-row-reverse">
      <div className="screen align-middle">{value}</div>
    </div>
  );
};

export default Screen;
