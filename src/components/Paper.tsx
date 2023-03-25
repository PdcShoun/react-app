import './Paper.css';
import Content from './Content'
import Picture from './Picture'

function Paper() {
  return (
    <div className="page">
      <div className="parent">
        <div className="div1"><Content head="Pachara PDC" text="I'm a cat person"/></div>
        <div className="div2"><Picture width={125} height={125}></Picture></div>
        <div className="div3">
          <Content text="
            orem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </div>
        <div className="div4"> </div>
        <div className="div5"> </div>
        <div className="div6"> </div>
      </div>
    </div>
  );
}

export default Paper;
