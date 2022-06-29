import React from 'react';

const Table = ({ data }) => {
    return (
        <table className="table table-responsive table-striped table-dark align-middle">
            <thead thead className="table-dark align-middle">
                <tr>
                    <th scope="col">Estante</th>
                    <th scope="col">Caja</th>
                    <th scope="col">Carpeta</th>
                    <th scope="col">Contenido</th>
                    <th scope="col">Fechas extremas</th>
                    <th scope="col">Autor</th>
                    <th scope="col">Fecha de descripción</th>
                    <th scope="col">Notas</th>

                </tr>
            </thead>
            <tbody>
                    {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.estante}</td>
                        <td>{item.caja}</td>
                        <td>{item.carpeta}</td>
                        <td>{item.contenido}</td>
                        <td>{item.fechasExtremas}</td>
                        <td>{item.updatedBy.name}</td>
                        <td>{item.createdAt.substring(0,10)}</td>
                        <td>{item.notas}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;