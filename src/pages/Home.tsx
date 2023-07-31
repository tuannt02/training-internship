import { Link } from 'react-router-dom';
import { Button } from '../components';

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24">
          <Link to="/">
            <img
              src="https://lh5.googleusercontent.com/5Nrz4PzGr5nz7_RVSg8wUq2f11nG7OlLQFqAV4qL95iB0B9F9mHKDPwnXW9Frq68VL-QkqaUm9r-4HO8LfFC0zY=w16383"
              alt="Company logo"
            />
          </Link>
        </div>
        <h2 className="text-h1 text-center mt-2">Welcome to Vitalify Asia</h2>
        <div className="flex mt-12 gap-x-4 mb-10">
          <Button width={100} type="primary" shape="rectangle" size="normal">
            <Link to="/signin">Sign in</Link>
          </Button>
          <Button width={100} type="outline" shape="rectangle" size="normal">
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
