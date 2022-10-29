const Banner = () => (
    <div class='banner'>
        <div class='banner-info'>
            <h1>Odin Project</h1>
            <p>
                My name is Rob Kokochak and this is my attempt at re-creating
                this website from a graphic mockup. It's a challenge project
                from the Odin Project, and is written entirely with plain html
                and css. I'm using it to practice front-end web development
                concepts, including responsiveness techniques with flexbox and
                media queries. Check out this photo I took at Big Sur, and then
                later artefied.
            </p>
            <button>Sign Up</button>
        </div>
        <div class='banner-image'>
            <img
                class='bigSurImage'
                src={'assets/images/Big-Sur-Artefied.jpg'}
                alt={'banner'}
            />
        </div>
    </div>
);

export default Banner;
