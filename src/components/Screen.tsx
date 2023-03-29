type Props = {
  value: string;
};

const Screen = ({ value }: Props) => {
  return (
    <div className="col">
      <div className="my-auto">{value}</div>
    </div>
  );
};

export default Screen;
