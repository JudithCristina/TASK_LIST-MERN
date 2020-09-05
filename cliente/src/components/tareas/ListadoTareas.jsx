import React,{Fragment} from 'react'

const ListadoTareas = () => {
    const tareas =[
        {nombre:"Elegir Plataforma", estado: true},
        {nombre:"Elegir Colores", estado: false},
        {nombre:"Elegir Plataforma de Pagos", estado: false},
        {nombre:"Elegir Hosting", estado: true},
    ]
    return (
        <Fragment>
            <h2>Prtoyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
{tareas.length === 0 ?
(<li className="tarea"><p>No hay Tareas</p></li>):
{}
}
            </ul>
        </Fragment>
       

    )
}

export default ListadoTareas
