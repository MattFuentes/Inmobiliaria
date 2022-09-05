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

router.get('/av-independencia-venta', (req, res) => {
    res.render('av-independencia-vendido-dpto.html', { tittle: 'Vendido Congreso Av Independencia 2030'});
});

router.get('/urquiza-venta', (req, res) => {
    res.render('urquiza-vendido-dpto.html', { tittle: 'Vendido Once Urquiza 41'});
});

router.get('/ramon-falcon-venta', (req, res) => {
    res.render('ramon-falcon-vendido-dpto.html', { tittle: 'Vendido Caballito Ramon Falcon 1621'});
});

router.get('/mansilla-venta', (req, res) => {
    res.render('mansilla-vendido-dpto.html', { tittle: 'Vendido Recoleta Mansilla 2935'});
});

router.get('/mendez-de-andes-venta', (req, res) => {
    res.render('mendez-andes-vendido-dpto.html', { tittle: 'Vendido Flores Norte Mendez de Andes 1947'});
});

router.get('/trelles-venta', (req, res) => {
    res.render('trelles-vendido-dpto.html', { tittle: 'Vendido Villa General Mitre Manuel R. Trelles 1521'});
});

router.get('/camacua-venta', (req, res) => {
    res.render('camacua-vendido-dpto.html', { tittle: 'Vendido Flores Camacua 368'});
});

router.get('/av-asamblea-venta', (req, res) => {
    res.render('av-asamblea-vendido-dpto.html', { tittle: 'Vendido Parque Chacabuco Av Asamblea 819'});
});

router.get('/ciudad-de-la-paz-venta', (req, res) => {
    res.render('ciudad-paz-vendido-dpto.html', { tittle: 'Vendido Belgrano Ciudad De La Paz 800'});
});

router.get('/segui-venta', (req, res) => {
    res.render('segui-vendido-dpto.html', { tittle: 'Vendido Caballito Norte Segui 744'});
});

router.get('/11-de-septiembre-venta', (req, res) => {
    res.render('11-septiembre-vendido-dpto.html', { tittle: 'Vendido Belgrano 11 de Septiembre de 1888 1774'});
});

router.get('/terrero-venta', (req, res) => {
    res.render('terrero-vendido-dpto.html', { tittle: 'Vendido Flores Norte Terrero 931'});
});

router.get('/chivilcoy-venta', (req, res) => {
    res.render('chivilcoy-vendido-ph.html', { tittle: 'Vendido Floresta Norte Av. Chivilcoy 975'});
});

router.get('/franklin-venta', (req, res) => {
    res.render('franklin-vendido-ph.html', { tittle: 'Vendido Caballito Norte Franklin 1235'});
});

router.get('/mariano-acosta-venta', (req, res) => {
    res.render('mariano-acosta-vendido-spn-house.html', { tittle: 'Suspendido Floresta Av. Mariano Acosta 432'});
});

router.get('/av-directorio-venta', (req, res) => {
    res.render('av-directorio-vendido-batch.html', { tittle: 'Vendido Floresta Av. Directorio 4640'});
});

router.get('/murature-venta', (req, res) => {
    res.render('murature-vendido-house.html', { tittle: 'Vendido Villa Luro Murature 5368'});
});

router.get('/amenabar-venta', (req, res) => {
    res.render('amenabar-venta-garage.html', { tittle: 'Venta Belgrano Amenabar 1528'});
});

module.exports = router;