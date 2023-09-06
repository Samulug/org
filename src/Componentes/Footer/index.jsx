import "./Footer.css"

    const Footer = () => {
        return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='redes'>
                <a href='https://www.facebook.com/profile.php?id=100013069146570'>
                    <img src="/img/facebook.png" alt='Facebook' />
                </a>
                <a href='https://www.aluracursos.com/404'>
                    <img src="/img/twitter.png" alt='twitter' />
                </a>
                <a href='https://www.instagram.com/samu.rod__/'>
                    <img src="/img/instagram.png" alt='instagram' />
                </a>
            </div>
            <img src='/img/Logo.png' alt='org' />
            <strong>Desarrollado por Samuel Rodriguez</strong>
        </footer>
    }

export default Footer