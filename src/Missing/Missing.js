import './Missing.styles.css'
import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>Page Not Found</h2>
            <p>Sorry you might have typed the wrong keyword.</p>
            <p>
                <Link to='/'>Visit Our Homepage</Link>
            </p>
        </main>
    )
}

export default Missing
