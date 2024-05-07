import { useParams, Link } from 'react-router-dom'


const Recipe = () => {
  const { name } = useParams();

  return (
    <div className='recipe-page'>
    {/* Home button to navigate back to the home page */}
    <Link to="/" className="home-button">Back to Home</Link>
    <h2>Recipe Details of {name}</h2>
  </div>
  )
}

export default Recipe;