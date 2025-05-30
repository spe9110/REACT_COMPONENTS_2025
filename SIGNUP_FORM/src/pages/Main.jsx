import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
        <h1 className='text-4xl font-bold'>Main</h1>
        <Link to="/signin" className='text-blue-500'>Sign In</Link>
        <Link to="/signup" className='text-blue-500'>Sign Up</Link>
    </div>
  )
}
export default Main;