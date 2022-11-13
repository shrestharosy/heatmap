import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import hm from 'heatmap.js';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const ola = document.querySelector('.heatmapContainer');

        if (ola) {
            const heatmapInstance = hm.create({
                container: document.querySelector('.heatmapContainer'),
                maxOpacity: 0.6,
                radius: 50,
                blur: 0.9,
            });
            const heatmapContainer = document.querySelector(
                '.heatmapContainerWrapper'
            );
            heatmapContainer.onmousemove = heatmapContainer.ontouchmove =
                function (e) {
                    e.preventDefault();
                    var x = e.layerX;
                    var y = e.layerY;
                    if (e.touches) {
                        x = e.touches[0].pageX;
                        y = e.touches[0].pageY;
                    }
                    heatmapInstance.addData({ x: x, y: y, value: 1 });
                };
        }

        return () => {};
    }, []);

    return (
        <div className={'heatmapContainerWrapper'}>
            <div className={'heatmapContainer'}>
                <div className={'main'}>
                    <div>
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
                                This is an inspiring quote, or a testimonial
                                from a customer. Maybe it's just filling up
                                space, or maybe people will actually read it.
                                Who knows? All I know is that it looks nice.
                            </p>
                            <p className='quote-author'>
                                -Thor, God of Thunder
                            </p>
                        </div>
                        <div className='call-to-a-section'>
                            <div className='call-to-a'>
                                <div className='text-col'>
                                    <h3>Call to action! It's time!</h3>
                                    <p>
                                        Sign up for our product by clicking that
                                        button right over there!
                                    </p>
                                </div>
                                <button>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
