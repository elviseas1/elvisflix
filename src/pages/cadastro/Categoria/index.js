import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
         <PageDefault>
            
            <h1>Página de Cadastro de Categoria</h1>

            <Link to="/cadastro/video">
              Cadastro de Vídeo  
            </Link>
         </PageDefault>

    );
  }

  export default CadastroCategoria;