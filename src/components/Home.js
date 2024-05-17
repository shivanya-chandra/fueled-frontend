import '../App.css';

function Home() {
    return (
        <div className="home-main">
        <div className="flex-container-1">
            Logo
            <h1 className="home-heading">Welcome</h1>
            <p className="home-description">Please enter your login details to continue accessing your account</p>
            <button className="home-sign-in">Sign in with Google</button>
            <button className="home-sign-up">Sign up with Google</button>

        </div>

        <div className="flex-container-2">
            svg
        </div>
        </div>
    );
}

export default Home;
