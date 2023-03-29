type Props = {
  operater: string;
};

const OperaterButton = ({ operater }: Props) => {
  return (
    <div className="col">
      <button className="btn btn-large btn-block btn-info w-100 h-100">{operater}</button>
    </div>
  );
};

export default OperaterButton;
