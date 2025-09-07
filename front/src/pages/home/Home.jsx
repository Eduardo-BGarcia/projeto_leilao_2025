import './Home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import imagemCarrossel1 from '../../assets/carrossel-n1.jpg';
import imagemCarrossel2 from '../../assets/carrossel-n2.jpg';
import imagemCarrossel3 from '../../assets/carrossel-n3.jpg';
import imagemCarrossel4 from '../../assets/carrossel-n4.jpg';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const SetaIcon = ({ direction = 'right' }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="24" 
        viewBox="0 -960 960 960" 
        width="24" 
        fill="currentColor"
        style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
    >
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </svg>
);

const Home = () => {
    const imagensHome = [
        {id: 1, src: imagemCarrossel1, alt: 'Vários bois e vacas em um pasto'},
        {id: 2, src: imagemCarrossel2, alt: 'Bezerro de cor preta em um pasto'},
        {id: 3, src: imagemCarrossel3, alt: 'Bezerro de cor marrom em um pasto'},
        {id: 4, src: imagemCarrossel4, alt: 'Bezerros de cor marrom em um pasto'},
    ];

    const carrosselRef = useRef();
    const [width, setWidth] = useState(0);
    const [position, setPosition] = useState(0);

    

    const handleNext = () => {
        const slideWidth = carrosselRef.current.offsetWidth;
        const newPosition = Math.max(position - slideWidth, -width);
        setPosition(newPosition);
    };

    // NOVO: Função para mover para o slide anterior
    const handlePrev = () => {
        const slideWidth = carrosselRef.current.offsetWidth;
        const newPosition = Math.min(position + slideWidth, 0);
        setPosition(newPosition);
    };

    useEffect(() => {
        const updateWidth = () => {
            if (carrosselRef.current) {
                const newWidth = carrosselRef.current.scrollWidth - carrosselRef.current.offsetWidth;
                setWidth(newWidth);
            }
        };

        const timer = setTimeout(updateWidth, 100); 
        window.addEventListener('resize', updateWidth);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updateWidth);
        };
    }, [imagensHome]);

    return (
        <>
            <Header />
            
            <div className="home-container">
                <div className="secao-principal">

                    <div className="carrossel-container">
                        <motion.div ref={carrosselRef} className="carrossel" whileTap={{ cursor: "grabbing" }}>

                            <motion.div 
                                className="inner" drag="x" dragConstraints={{ right: 0, left: -width }} initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}
                            >
                                {imagensHome.map(imagem => (
                                    <motion.div className="item" key={imagem.id}>
                                        <img
                                            src={imagem.src} alt={imagem.alt}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div> 

                    </div>

                    <div className="detalhes-leilao-futuro">
                        <div>
                            <div>
                                <h2>Bem Vindo ao AgroLance!</h2>
                                <br />
                                <p>Participe dos melhores leilões de gado online, na cidade de Paranavaí. Comece a explorar as oportunidades!</p>
                                <br />
                            </div>
                            <Button className="b-listar-leiloes">Leilões neste Momento</Button>
                            <Button className="b-cadastrar-leiloes">Cadastrar Leilões</Button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Home;
