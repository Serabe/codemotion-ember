module.exports = function(app) {
    var express = require('express');
    var zonesRouter = express.Router();
    zonesRouter.get('/', function(req, res) {
        res.send({"zones":ZONES});
    });
    zonesRouter.get('/:id', function(req, res) {
        res.send({zones: ID_TO_ZONE[req.params.id]});
    });
    app.use('/api/zones', zonesRouter);
};

var ZONES =
[
{
    id: 'castolia',
    name: 'Castolia',
    main: true,
    borders: ['pastollanos-este'],
    description: 'Ciudad inicial bajo el dominio del rey Reinaldo'
},
{
    id: 'portopolis',
    name: 'Portópolis',
    main: true,
    borders: ['pastollanos-oeste', 'archipielago-tortuga'],
    description: 'Preciosa ciudad costera llena de piratas.'
},
{
    id: 'terramago',
    name: 'Terramago',
    main: true,
    borders: ['desfiladero-desertico'],
    description: 'Temible zona donde reina el sultanieblo.'
},
{
    id: 'pastollanos-este',
    name: 'Este de Pastollanos',
    main: false,
    borders: ['castolia','pastollanos-oeste', 'monteniveo'],
    description: 'Primera zona con enemigos: coyotes, abejas, ovejas y bandidos.'
},
{
    id: 'monteniveo',
    name: 'Monteníveo',
    main: false,
    borders: ['pastollanos-este'],
    description: 'Monte donde podrás encontrar a la única persona maestra en todas las vidas.'
},
{
    id: 'cima-monteniveo',
    name: 'Cima de Monteníveo',
    main: false,
    borders: ['monteniveo', 'cueva-somnidragon'],
    description: 'Cima nevada con tigres, avestruces, conejos y Tyranosaurus Rex'
},
{
    id: 'cueva-somnidragon',
    name: 'Cueva del Somnidragón',
    main: false,
    borders: ['cima-monteniveo'],
    description: 'Cueva con las crías del Somnidragón: los dragones hadas.'
},
{
    id: 'pastollanos-oeste',
    name: 'Oeste de Pastollanos',
    main: false,
    borders: ['pastollanos-este', 'granja-rotrigo', 'portopolis', 'desfiladero-desertico'],
    description: 'Zona oeste de Pastollanos, con serpientes, sapos, toros y hortalizas asesinas.'
},
{
    id: 'granja-rotrigo',
    name: 'Granja de Rotrigo',
    main: false,
    borders: ['pastollanos-oeste'],
    description: 'Preciosa granja en medio del oeste de Pastollanos'
},
{
    id: 'archipielago-tortuga',
    name: 'Archipiélago Tortuga',
    main: false,
    borders: ['portopolis'],
    description: 'Zona paradisiaca al lado de Portópolis de no ser por sus pirañas y piratas zombies.'
},
{
    id: 'desfiladero-desertico',
    name: 'Desfiladero desértico',
    main: false,
    borders: ['pastollanos-oeste', 'terramago'],
    description: 'Una zona de paso que conduce a la peligrosa Terramago'
}
];

var find = function(id) {
    for(var i = 0, len=ZONES.length; i < len; i++) {
        if(ZONES[i].id === id) {
            return ZONES[i];
        }
    }
    return void 0;
};

var ID_TO_ZONE = {};
ZONES.forEach(function(el) {
    this[el.id] = [el];
    for(var i = 0, len = el.borders.length; i < len; i ++) {
        this[el.id].push(find(el.borders[i]));
    }
}, ID_TO_ZONE);

ID_TO_ZONE['missingno'] = [{
    id: 'missingno',
    name: 'Missingno',
    main: false,
    borders: [],
    description: 'Una rara zona desconocida'
}];

var MAIN_ZONES = ZONES.filter(function(el) {
    return el.main;
});
