import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h1>Familia {props.familia}</h1>
      <Filho nome="A" familia={props.familia} />
      <Filho nome="B" familia={props.familia} />
      <Filho {...props} nome="C" />
    </div>
  )
}