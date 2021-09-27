import './Backdrop.css'

function Backdrop({ show, click }) {
  return (
    show &&
    <div className="backdrop" onClick={click}>
      backdrop
    </div>
  )
}

export default Backdrop
