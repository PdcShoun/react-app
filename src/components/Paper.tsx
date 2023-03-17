import './Paper.css';
import Content from './Content'

function Paper() {
  return (
    <div className="page">
      <div className="content">
        {/* Your content goes here */}
        <Content age={99}></Content>
      </div>
    </div>
  );
}

export default Paper;
