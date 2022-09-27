const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { tittle: 'Soraci Propiedades'});
});

router.get('/alquiler', (req, res) => {
    res.render('alquiler.html', { tittle: 'Alquiler - Soraci'});
});

router.get('/ventas', (req, res) => {
    res.render('ventas.html', { tittle: 'Ventas - Soraci'});
});

router.get('/ficha-alquiler', (req, res) => {
    res.render('ficha-alquiler.html', { tittle: 'Alquiler Ejemplo'});
});

router.get('/ficha-venta', (req, res) => {
    res.render('ficha-venta.html', { tittle: 'Venta Ejemplo'});
});

router.get('/quienessomos', (req, res) => {
    res.render('quienessomos.html', { tittle: 'Venta Ejemplo'});
});

router.get('/3-de-febrero-alquiler', (req, res) => {
    res.render('3df-alquiler-dpto.html', { tittle: 'Alquiler Temporario 3 de febrero'});
});

router.get('/san-clemente-calle1-venta', (req, res) => {
    res.render('calle-1-sc-venta-dpto.html', { tittle: 'Venta en block San Clemente Calle 1 2100 '});
});

router.get('/av-san-pedrito-venta', (req, res) => {
    res.render('av-sp-venta-dpto.html', { tittle: 'Venta Avenida San Pedrito 200'});
});

router.get('/espinosa-venta', (req, res) => {
    res.render('espinosa-venta-dpto.html', { tittle: 'Venta Caballito Norte Espinoza 460'});
});

router.get('/caracas-venta', (req, res) => {
    res.render('caracas-venta-dpto.html', { tittle: 'Venta Flores Norte Caracas 338'});
});

router.get('/nicolas-repetto-480-venta', (req, res) => {
    res.render('nicolas-repetto480-venta-dpto.html', { tittle: 'Venta Caballito Norte Dr. Nicolás Repetto 480'});
});

router.get('/nicolas-repetto-1041-venta', (req, res) => {
    res.render('nicolas-repetto1041-venta-dpto.html', { tittle: 'Venta Caballito Norte Dr. Nicolás Repetto 1041'});
});

router.get('/lavalleja-venta', (req, res) => {
    res.render('lavalleja-venta-dpto.html', { tittle: 'Venta Villa Crespo Lavalleja 945'});
});

router.get('/cachimayo-venta', (req, res) => {
    res.render('cachimayo-venta-ph.html', { tittle: 'Venta Parque Chacabuco Cachimayo 1840'});
});

router.get('/la-lucila-del-mar-venta', (req, res) => {
    res.render('lucila-venta-batch.html', { tittle: 'Venta Pinamar De La Lucila Del Mar Santa Fe 1200'});
});

router.get('/mitre-venta', (req, res) => {
    res.render('mitre-venta-garage.html', { tittle: 'Venta Microcento Bartolome Mitre 1463'});
});

router.get('/araoz-744-alquiler', (req, res) => {
    res.render('araoz744-alquiler-garage.html', { tittle: 'Alquiler Villa Crespo Araoz 744'});
});

router.get('/araoz-1381-alquiler', (req, res) => {
    res.render('araoz1381-alquiler-dpto.html', { tittle: 'Alquiler Villa Crespo Araoz 1381'});
});

router.get('/pueyrredon-alquiler', (req, res) => {
    res.render('pueyrredon-alquiler-dpto.html', { tittle: 'Alquiler Caballito Norte Honorio Pueyrredon 741'});
});

router.get('/av-diaz-velez-alquiler', (req, res) => {
    res.render('av-velez-alquiler-dpto.html', { tittle: 'Alquiler Caballito Norte Av. Diaz Velez 5332'});
});

router.get('/av-cordoba-alquiler', (req, res) => {
    res.render('av-cordoba-alquiler-dpto.html', { tittle: 'Alquiler Barrio Norte Av. Cordoba 1752'});
});

router.get('/lavalleja-alquiler', (req, res) => {
    res.render('lavalleja-alquiler-dpto.html', { tittle: 'Venta Villa Crespo Lavalleja 945'});
});

router.get('/av-incas-alquiler', (req, res) => {
    res.render('av-incas-alquiler-dpto.html', { tittle: 'Venta Villa Urquiza Av. de los Incas 4649'});
});

router.get('/nicolas-repetto-1041-alquiler', (req, res) => {
    res.render('nicolas-repetto1041-alquiler-dpto.html', { tittle: 'Venta Caballito Norte Dr. Nicolás Repetto 1041'});
});

router.get('/camargo-1072-alquiler', (req, res) => {
    res.render('camargo1072-alquiler-dpto.html', { tittle: 'Venta Villa Crespo Camargo 1072'});
});

router.get('/av-boedo-10-alquiler', (req, res) => {
    res.render('av-boedo-alquiler-dpto.html', { tittle: 'Venta Almagro Av. Boedo 10'});
});

router.get('/araoz-744-alquiler-dpto3', (req, res) => {
    res.render('araoz744-alquiler-dpto3.html', { tittle: 'Alquiler Villa Crespo Araoz 744 3 Piso'});
});

router.get('/araoz-744-alquiler-dpto5', (req, res) => {
    res.render('araoz744-alquiler-dpto5.html', { tittle: 'Alquiler Villa Crespo Araoz 744 5 Piso'});
});

router.get('/araoz-750-alquiler', (req, res) => {
    res.render('araoz750-alquiler-dpto.html', { tittle: 'Alquiler Villa Crespo Araoz 750'});
});

router.get('/castillo-alquiler', (req, res) => {
    res.render('castillo-alquiler-dpto.html', { tittle: 'Alquiler Villa Crespo Castillo 549'});
});

router.get('/av-rivadavia-alquiler', (req, res) => {
    res.render('av-rivadavia-alquiler-dpto.html', { tittle: 'Alquiler Almagro Av. Rivadavia 3446'});
});

router.get('/camargo-351-alquiler', (req, res) => {
    res.render('camargo351-alquiler-dpto.html', { tittle: 'Venta Villa Crespo Camargo 351'});
});

router.get('/marcos-sastre-alquiler', (req, res) => {
    res.render('marcos-sastre-alquiler-dpto.html', { tittle: 'Venta Villa Del Parque Marcos Sastre 2740'});
});

router.get('/neuquen-alquiler', (req, res) => {
    res.render('neuquen-alquiler-dpto.html', { tittle: 'Venta Flores Norte Neuquen 2573'});
});

router.get('/amenabar-venta', (req, res) => {
    res.render('amenabar-venta-garage.html', { tittle: 'Venta Belgrano Amenabar 1528'});
});

module.exports = router;