export default function Hero() {
    return (
        <div className="hero">
            <img src="/img/iconfinder_glasses_71479.png" className="glasses" alt="my image" />
            <div className="hero-left">
                <img src="/img/hero.png" style={{ visibility: false }} alt="my image" />
            </div>
            <div className="hero-right">
                <div className="hero-flex">
                    <h2 className="hero-header">Lorem ipsum dolor sit amet</h2>
                    <p className="hero-para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                        totam provident deleniti ea dignissimos necessitatibus itaque maxime
                        quam, sapiente error eum molestias quaerat aperiam sed! Consequuntur
                        similique unde voluptates nesciunt.
                    </p>
                    <NavLink to="/" className="our-products">
                        OUR PRODUCTS
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
