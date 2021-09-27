import './Backdrop.css'

function Backdrop({ show }) {
  return (
    show &&
    <div className="backdrop">
      backdrop
    </div>
  )
}

export default Backdrop
