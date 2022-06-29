import React, { useState } from "react";
import './styles/App.css';
import Table from "./components/Table";
import gmail from './images/gmail.png';
import linkedin from './images/linkedin.png';


// Query taken from GRAPHQL
const OBJECT_QUERY = `
{
   inventarios(first: 1000, orderBy: carpeta_ASC) {
    contenido
    carpeta
    caja
    createdAt
    estante
    fechasExtremas
    id
    updatedBy {
      name
    }
    notas
  }
}
`

function App() {
  // States used in this app
  const [query, setQuery] = useState("");
  const [unidad, setUnidad] = useState([]);

  // Search function used by the input
  const search = (data) => {
    return data.filter((item) =>
      item.estante.toLowerCase().includes(query) ||
      item.caja.toLowerCase().includes(query) ||
      item.carpeta.toLowerCase().includes(query) ||
      item.contenido.toLowerCase().includes(query) ||
      item.fechasExtremas.toLowerCase().includes(query) ||
      item.updatedBy.name.toLowerCase().includes(query) ||
      item.createdAt.toLowerCase().includes(query)
      )
      ;
  };

  // Data fetch from GRAPHQL
  React.useEffect(() => {
    fetch('https://api-us-west-2.graphcms.com/v2/cl4ribc7x15z801z3fllp1uw1/master', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ query: OBJECT_QUERY })
    }).then(response => response.json())
      .then(data => setUnidad(data.data.inventarios))
  }, [])
console.log(unidad)
  // Aplication by itself   
  return (

      <div className="container">
        
        <div className="row">
          <h1 className="text-center p-4">Inventario documental del Programa del Posgrado en Especialidades Médicas</h1>
        </div>

        <div className="row">
          <h4>Introduzca un criterio de busqueda.</h4>
          <input type="text" placeholder="Buscar..." className="form-control" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
        </div>

        <div className="row">
          <p className="text-end">Desarrollado por <a href="https://personal-portfolio-xi-taupe.vercel.app/" target="_blank" rel="noopener noreferrer">
            David Rivas Mora.
          </a> Versión 1.0. Año 2022</p>
        </div>

        <div className="row">
          <div className="col">
            <a id="item1" className="rounded-full" href="mailto:alonsorivasmora@gmail.com" target="_blank" rel="noreferrer noopener">
              <img
                alt=""
                height="20px"
                width="20px"
                className="image1"
                src={gmail}
              />
            </a>
            <a id="item2" className="rounded-full" href="https://www.linkedin.com/in/david-alonso-rivas-mora-24b606170/" target="_blank" rel="noreferrer noopener">
              <img
                alt=""
                height="20px"
                width="20px"
                className="image2"
                src={linkedin}
              />
            </a>
          </div>
          
        </div>

        <div className="row">
          <Table data={search(unidad)} />
        </div>
      
      </div>
  );
}

export default App;
