import { Link } from 'react-router-dom';
import './LandingPage.css'


const LandingPage = () => {
    return ( 
        <section className='startPage'>
            <h1>Welcome to your Movie Website</h1>
            <Link to="/moviepage" className='link'>Choose a Movie</Link>
        </section>
        

    );
}
 
export default LandingPage;