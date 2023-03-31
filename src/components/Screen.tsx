import "./Screen.css";

type Props = {
  value: string;
};

const Screen = ({ value }: Props) => {
  return <span className="display">{value}</span>;
};

export default Screen;
