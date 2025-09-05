import './Home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import imagemCarrossel1 from '../../assets/carrossel-n1.jpg';
import imagemCarrossel2 from '../../assets/carrossel-n2.jpg';
import { Button } from 'primereact/button';

const Home = () => {
    const imagensHome = [
        {
            id: 1,
            src: imagemCarrossel1,
            alt: 'Descrição da primeira imagem'
        },
        {

            id: 2,
            src: imagemCarrossel2,
            alt: 'Descrição da segunda imagem'
        }
    ];

    return (
        <>
            <Header />
            
            <div className="secao-principal">
                
                <div className="container-imagens-home">
                    {imagensHome.map(imagem => (
                        <img
                            key={imagem.id}
                            src={imagem.src}
                            alt={imagem.alt}
                        />
                    ))}
                </div>

               
                <div className="detalhes-leilao-futuro">
                    <div>
                        <Button className="b-listar-leiloes">Leiloes neste Momento</Button>                  
                        <Button className="b-cadastrar-leiloes">Cadastrar Leilões</Button>                   
                    
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Home;
