import { Router } from "express";
import session from "express-session";
import { client } from "../db.js";

const router = Router();

router.use(
  session({
    secret: 'mysecretkey', // Cambia esto por una clave secreta más segura
    resave: false,
    saveUninitialized: true,
  })
);

//Función que valida el login
function requireLogin(req, res, next) {
  if (req.session && req.session.username) {
    next();
  } else {
    res.redirect('/');
  }
}

//Función de permisos para gestion humana
function requireHumana(req, res, next){
  if (req.session.group === "Depto Humana" || req.session.group === "Depto Tecnologia") {
    next();
  } else {
    res.redirect('/integral/procesos');
    console.log('No tiene permiso para acceder a estos documentos');
  }
}

//Función de permisos para gestion Aprovisionamiento
function requireAprovisionamiento(req, res, next){
  if(req.session.group === "Depto Aprovisionamiento" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect('/integral/procesos');
    console.log('No tiene permiso para acceder a estos documentos');
  }
}

//Función de permisos para gestion financiera
function requireFinanciera(req, res, next){
  if(req.session.group === "Depto Financiera" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect("/integral/procesos");
    console.log('No tiene permiso para acceder a estos documentos')
  }
}

//Función de permisos para gestion estrategica
function requireEstrategica(req, res, next){
  if(req.session.group === "Depto Estrategica" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect("/integral/procesos");
    console.log('No tiene permiso para acceder a estos documentos')
  }
}
//Función de permisos para gestion calidad
function requireCalidad(req, res, next){
  if(req.session.group === "Depto Calidad" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect("/integral/procesos");
    console.log('No tiene permiso para acceder a estos documentos')
  }
}
//Función de permisos para gestion comercial
function requireComercial(req, res, next){
  if(req.session.group === "Depto Comercial" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect("/integral/procesos");
    console.log('No tiene permiso para acceder a estos documentos')
  }
}
//Función de permisos para gestion operaciones
function requireOperaciones(req, res, next){
  if(req.session.group === "Depto Operaciones" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect("/integral/procesos");
    console.log('No tiene permiso para acceder a estos documentos')
  }
}

//Ruta por defecto que muestra la página de inicio de sesion
router.get("/", (req, res) => {
  if (req.session && req.session.username) {
    res.redirect('/index');
    return;
  }
  res.render("login", { error: null });
});

//ruta que envia los datos del usuario
router.post("/", (req, res) => {
  const { group, username, password } = req.body;

  client.bind(
    `cn=${username},ou=${group},cn=UserWebGroup,ou=WebUnit,cn=Manager,dc=gruposelcomp,dc=com`,
    password, (err) => {
      if (err) {
        console.error('Error al autenticar usuario:', err);
        res.render('login', { error: 'Credenciales inválidas' });
        return;
      }
      req.session.username = username;
      req.session.group = group;
      console.log('Inicio de sesión exitoso');
      res.redirect('/index');
  });
}); 

//Ruta de la pagina principal
router.get('/index', requireLogin, (req, res) => {
  const username = req.session.username;
  res.render('index', { username });
});

//Ruta para cerrar sesion
router.post('/index', requireLogin, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }

    res.render('login', { error: 'Credenciales inválidas' });
  });
});


//============================== Rutas hijas ============================================
//================Page Aplicaciones==============================
router.get("/aplicaciones",  requireLogin, (req, res) => {
  res.render("aplicaciones");
});

router.get("/aplicaciones/aranda",  requireLogin, (req, res) => {
  res.render("aranda");
});

router.get("/aplicaciones/novasoft",  requireLogin, (req, res) => {
  res.render("novasoft");
});

//==============Page gestion integral===========================================
router.get("/integral",  requireLogin,  (req, res) => {
  res.render("integral");
});

router.get("/integral/procesos",  requireLogin, (req, res) => {
  const group = req.session.group
  res.render("mapa-proceso", {group});
});

//Procesos de apoyo o soporte
router.get("/integral/procesos/humana",  requireLogin, requireHumana, (req, res) => {
  res.render("humana");
});
router.get("/integral/procesos/aprovisionamiento",  requireLogin, requireAprovisionamiento, (req, res) => {
  res.render("aprovisionamiento");
});
router.get("/integral/procesos/financiera",  requireLogin, requireFinanciera, (req, res) => {
  res.render("financiera");
});

//Procesos gerenciales
router.get("/integral/procesos/estrategica",  requireLogin, requireEstrategica, (req, res) => {
  res.render("estrategica");
});
router.get("/integral/procesos/calidad",  requireLogin, requireCalidad, (req, res) => {
  res.render("calidad");
});

//Procesos misionales
router.get("/integral/procesos/comercial",  requireLogin, requireComercial, (req, res) => {
  res.render("comercial");
});
router.get("/integral/procesos/operaciones",  requireLogin, requireOperaciones, (req, res) => {
  res.render("operaciones");
});

export default router;
