import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <>
            <div className={'main'}>
                <Header />
                <Banner />
                <div className='middle-section'>
                    <h2>Some random information.</h2>
                    <div className='middle-section-cards'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className='quote-section'>
                    <p className='quote'>
                        This is an inspiring quote, or a testimonial from a
                        customer. Maybe it's just filling up space, or maybe
                        people will actually read it. Who knows? All I know is
                        that it looks nice.
                    </p>
                    <p className='quote-author'>-Thor, God of Thunder</p>
                </div>
                <div className='call-to-a-section'>
                    <div className='call-to-a'>
                        <div className='text-col'>
                            <h3>Call to action! It's time!</h3>
                            <p>
                                Sign up for our product by clicking that button
                                right over there!
                            </p>
                        </div>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
