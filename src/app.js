import express from 'express';
import bodyParser from 'body-parser';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import port from './config.js'
import indexRoutes from "./routes/index.js"


const app = express();
app.use(bodyParser.urlencoded({extended: true}))
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', [
    join(__dirname, 'views'),
    join(__dirname, 'views', 'pages', 'apps'),
    join(__dirname, 'views', 'pages', 'apps', 'pages', 'aranda'),
    join(__dirname, 'views', 'pages', 'apps', 'pages', 'novasoft'),

    join(__dirname, 'views', 'pages', 'gestion-integral'),
    join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos'),
    join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana'),
    join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento'),
    join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-financiera'),
    join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-estrategica'),
    join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-calidad'),
    join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-comercial'),
    join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones'),
]);
app.set('view engine', 'ejs');


// 81721019
// Depto Tecnologia

app.use(indexRoutes);

//Estilo global
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'css')));

//Bootstrap global
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));

//Imagenes
app.use(express.static(path.join(__dirname, 'public', 'img')));
app.use(express.static(path.join(__dirname, 'public', 'imagenes')));

app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps', 'images')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps', 'pages', 'aranda')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps', 'pages', 'aranda', 'images')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps', 'pages', 'novasoft')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps', 'pages', 'novasoft', 'images')));


//Accediendo a los assets del sistema de gestion integral y todas sus paginas

//<<============================================>Mapa de los procesos<======================================================>>
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'images')));

//<=========================================Gestion humana====================================================>
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'images')));

// 1 Caracterizacion
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '1. caracterizacion')));

//2 Politicas
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '2. politicas')));

//3 Manuales
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '3. manuales')));

//4 Procedimientos
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '4. procedimientos')));

//5 Instructivos
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '5. instructivos')));

//6 Organigrama
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '6. organigrama')));

//7 Formatos
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '7. formatos', '7.1 formatos-generales')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '7. formatos', '7.2 seleccion-personal')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '7. formatos', '7.3 capacitaciones')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '7. formatos', '7.4 evaluacion-desempeño')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '7. formatos', '7.5 formatos internos')));

//8 Guias
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-humana', 'documentos-humana', '8. guias')));

//<=========================================Gestion de aprovisionamiento====================================================>
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'images')));

// 1 Caracterizacion
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '1-caracterizacion')));

//2 Compras
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '2-compras', '2.1-procedimientos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '2-compras', '2.2-instructivos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '2-compras', '2.3-formatos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '2-compras', '2.4-politica')));

//3 Almacen
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '3-almacen', '3.1-procedimientos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '3-almacen', '3.2-instructivos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '3-almacen', '3.3-formatos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '3-almacen', '3.4-no-controlados')));

//4 Producto no conforme
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '4-producto-noConforme', '4.1-procedimientos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-aprovisionamiento', 'documentos-aprovisionamiento', '4-producto-noConforme', '4.2-instructivos')));

//<=========================================Gestion financiera====================================================>
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-financiera')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-financiera', 'images')));

// 1 Caracterizacion
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-financiera', 'documentos-financiera', '1. caracterizacion')));

//2 Procedimientos
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-financiera', 'documentos-financiera', '2. procedimientos')));

//3 Instructivos
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-financiera', 'documentos-financiera', '3. instructivos')));

//4 Formatos
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-financiera', 'documentos-financiera', '4. formatos')));

//5 No cotrolados
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-financiera', 'documentos-financiera', '5. no-controlados')));

//<=========================================Gestion estrategica====================================================>
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-estrategica')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-estrategica', 'images')));

// 1 Caracterizacion
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-estrategica', 'documentos-estrategica', '1.caracterizacion')));

//2 Procedimientos
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-estrategica', 'documentos-estrategica', '2.procedimientos')));

//3 Manuales
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-estrategica', 'documentos-estrategica', '3.manuales')));

//4 Formatos
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-estrategica', 'documentos-estrategica', '4.formatos')));

//<=========================================Gestion de calidad====================================================>
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-calidad')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-calidad', 'images')));

// 1 Caracterizacion
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-calidad', 'documentos-calidad', '1.caracterizacion')));

//2 Calidad
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-calidad', 'documentos-calidad', '2.calidad')));

//3 Acciones de mejora
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-calidad', 'documentos-calidad', '3.acciones-mejora')));

//4 Auditorias
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-calidad', 'documentos-calidad', '4.auditorias')));

//5 Informacion documentada
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-calidad', 'documentos-calidad', '5.informacion-documentada')));

//6 Servicio al cliente
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-calidad', 'documentos-calidad', '6.servicio-cliente')));

//7 General
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-calidad', 'documentos-calidad', '7.general')));

//<=========================================Gestion comercial====================================================>
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-comercial')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-comercial', 'images')));

// 1 Caracterizacion
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-comercial', 'documentos-comercial', '1.caracterizacion')));

//2 Procedimientos
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-comercial', 'documentos-comercial', '2.procedimientos')));

//3 Politicas
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-comercial', 'documentos-comercial', '3.politicas')));

//4 Formatos
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-comercial', 'documentos-comercial', '4.formatos')));

//<=========================================Gestion de operaciones====================================================>
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'images')));

// 1 Operaciones
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '1.operaciones', '1.1.caracterizacion')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '1.operaciones', '1.2.procedimientos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '1.operaciones', '1.3.instructivos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '1.operaciones', '1.4.formatos')));

//2 Mantenimiento
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '2.mantenimiento', '2.1 procedimientos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '2.mantenimiento', '2.2 instructivos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '2.mantenimiento', '2.3 formatos')));

//3 Laboratorio
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '3.laboratorios', '3.1 procedimientos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '3.laboratorios', '3.2 instructivos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '3.laboratorios', '3.3 guias')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '3.laboratorios', '3.4 formatos')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '3.laboratorios', '3.5 no-controlados')));

//4 Planes de trabajo
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'mapa-procesos', 'pages', 'tabla-operaciones', 'documentos-operaciones', '4.planes-trabajo')));

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
});
