import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain';
import Carrosel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414"}}>
    <div >
      <Menu />
      
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />

      <Carrosel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carrosel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carrosel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carrosel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carrosel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carrosel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer />


    </div>
    </div>
  );
}

export default Home;
