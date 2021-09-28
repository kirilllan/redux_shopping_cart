import './HomeScreen.css'

function HomeScreen() {
  return (
    <div className="homescreen">
      <h2 className="homescreen_title">Latest products</h2>
      <div className="homescreen__products">
        <Product />
      </div>
    </div>
  )
}

export default HomeScreen
