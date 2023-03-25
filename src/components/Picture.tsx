import Cat from '../assets/cat.png'
import './Picture.css'

type Size = {
  width : number,
  height : number,
}

const Picture = ({width , height}: Size) => {
  return (
    <>
      <img className="center" src={Cat} width={width} height={height}></img>
    </>
  )
}

export default  Picture