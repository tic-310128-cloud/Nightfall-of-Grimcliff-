// Importacion del React y el hook useState para controlar la pantalla actual
import React, { useState } from 'react';
// Importacion el archivo de estilos 
import './App.css'
// Importacion de imagenes 
import imagenPastel from './pastel.png';
import imagenLimon from './limon.png';

// Guardar la información de las 2 recetas en una lista
const recetasData = [
    {
        id: 1,
        nombre: "Pastel de frutos rojos",
        categoria: "Reposteria",
        descripcion: "Delicioso pastel casero esponjoso con crema suave y decoración de frutas rojos frescos.",
        ingredientes: [
            "Bizcocho: 6 huevos, 1 taza de azúcar, 1cda de zumo de limón, 1 cdita de ralladura de limón, 1 taza de harina, ¼ cdita de sal, 2 cdas de zumo de limón, 1 cdita de extracto de vainilla.",
            "Crema: ½ taza de nata montada, 125g de queso crema, ⅓ de taza de azúcar, ½ cdita de ralladura de limón, 2 cdas de zumo de limón, 1 cdita de extracto de vainilla.",
            "Decoración: 125g de fresas en rodajas, ⅓ taza de mermelada de fresa, Frutos rojos y Azúcar glass al gusto."
        ],
        pasos: [
            "Precalienta el horno a una temperatura de 190°C.",
            "En un bowl, bate los huevos con el azúcar durante 5 minutos y añade la ralladura de limón y el zumo.",
            "Tamiza la harina con la sal y agrégala al bowl, al igual que los huevos, sin dejar de batir.",
            "Incorpora la mantequilla derretida y la vainilla.",
            "Vierte la mezcla en un molde y hornea por 40 minutos. Deja enfriar.",
            "Para la crema, mezcla la nata montada con el queso crema, el azúcar, la vainilla, el zumo de limón y la ralladura.",
            "Baña la mitad de las fresas en la mermelada.",
            "Corta el bizcocho por la mitad (horizontalmente). Añade la mitad de las fresas bañadas en mermelada y la mitad de la nata. Coloca la segunda mitad del bizcocho y repite el proceso.",
            "Decora con frutos rojos y azúcar glass a tu gusto."
        ],
        imagen: imagenPastel,
        estiloClase: "btn-pastel",
        badgeClase: "badge-pastel"
    },
    {
        id: 2,
        nombre: "Postre casero de Limón",
        categoria: "Postre Frío",
        descripcion: "Un clásico y refrescante postre de galletas Marías y mezcla de tres lechas con limón.",
        ingredientes: [
            "1 lata de leche condensada",
            "1 lata de leche evaporada",
            "1 lata de leche entera",
            "1 taza de Jugo de limón agrio (10-12 limones)",
            "1 paquete de Galletas Marías"
        ],
        pasos: [
            "Pasa por un colador el jugo de limón, a modo de que este quede limpio, sin semillas.",
            "En la licuadora, procesa el jugo de limón junto con las tres leches, hasta que quede una mezcla tersa y suave.",
            "En un molde o refractario, vacía un poco de la mezcla, creando una capa en el fondo del molde.",
            "Coloca una capa de galletas Marías enteras. Procura cubrir las orillas con trozos de galleta.",
            "Repite el mismo proceso 3 o 4 veces. La última capa debe ser de mezcla, no de galletas.",
            "Cubre el molde con papel aluminio y refrigéralo durante 3 o 4 horas ¡y estará listo!"
        ],
        imagen: imagenLimon,
        estiloClase: "btn-limon",
        badgeClase: "badge-limon"
    }
];

export default function Recetario() {
    // Guardar la receta seleccionada 
    const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

    return (
        <div className="app-container">
            <div className="card">

                {/*CONDICIONAL: Si no hay una receta seleccionada se muestra la lista */}
                {recetaSeleccionada === null ? (
                    <div>
                        {/* Título de la aplicacion */}
                        <div className="app-header">
                            <h1 className="header-title"> Mi Recetario</h1>
                            <p className="header-subtitle">Selecciona una opción para cocinar</p>
            </div>

            {/* Recorrer la lista de recetas para mostrar los botones */}
            <div className="recipe-list">
            {recetasData.map((receta) => (
                <button
                    key={receta.id}
                    className={`recipe-card-btn ${receta.estiloClase}`}
                    // Al hacer clic, guarda esta receta en el estado para cambiar a Pantalla 2
                    onClick={() => setRecetaSeleccionada(receta)}
                    >
                        <div>
                            <div className="recipe-name">{receta.nombre}</div>
                            <span className={`badge-tag ${receta.badgeClase}`}>{receta.categoria}</span>
                        </div>
                    </button>
            ))}
         </div>
    </div>

    ) : (

        /* PANTALLA 2: Si ya hay receta seleccionada, muestra sus detalles */
        <div>
            {/* Nombre y descripción de la receta */}
            <h2 className="recipe-title">{recetaSeleccionada.nombre}</h2>
            <p className="recipe-description">{recetaSeleccionada.descripcion}</p>

            {/* Lista de ingredientes */}
            <h3 className="section-title">Ingredientes</h3>
            <ul className="custom-list">
                {recetaSeleccionada.ingredientes.map((ing, i) => (
                    <li key={i}>{ing}</li>
                ))}
            </ul>

            {/* Lista de pasos de preparación */}
            <h3 className="section-title">Pasos de preparación</h3>
            <ol className="custom-list">
                {recetaSeleccionada.pasos.map((paso, i) => (
                    <li key={i}>{paso}</li>
                ))}
            </ol>

            {/* imagen de la receta */}
            <div>
                <img
                src={recetaSeleccionada.imagen}
                alt={recetaSeleccionada.nombre}
                className="recipe-image"
                />
            </div>

            {/* BOTÓN REGRESAR */}
            <button
                className="btn-regresar"
                onClick={() => setRecetaSeleccionada(null)}
                >
                    Regresar a Recetas
                </button>
            </div>
        )} 
        
        </div>
    </div>
 );

}