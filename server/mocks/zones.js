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
    borders: ['pastollanos-este']
},
{
    id: 'portopolis',
    name: 'Portópolis',
    main: true,
    borders: ['pastollanos-oeste', 'archipielago-tortuga']
},
{
    id: 'terramago',
    name: 'Terramago',
    main: true,
    borders: ['desfiladero-desertico']
},
{
    id: 'pastollanos-este',
    name: 'Este de Pastollanos',
    main: false,
    borders: ['castolia','pastollanos-oeste', 'monteniveo']
},
{
    id: 'monteniveo',
    name: 'Monteníveo',
    main: false,
    borders: ['pastollanos-este']
},
{
    id: 'cima-monteniveo',
    name: 'Cima de Monteníveo',
    main: false,
    borders: ['monteniveo', 'cueva-somnidragon']
},
{
    id: 'cueva-somnidragon',
    name: 'Cueva deñ Somnidragón',
    main: false,
    borders: ['cima-monteniveo']
},
{
    id: 'pastollanos-oeste',
    name: 'Oeste de Pastollanos',
    main: false,
    borders: ['pastollanos-este', 'granja-rotrigo', 'portopolis', 'desfiladero-desertico']
},
{
    id: 'granja-rotrigo',
    name: 'Granja de Rotrigo',
    main: false,
    borders: ['pastollanos-oeste']
},
{
    id: 'archipielago-tortuga',
    name: 'Archipiélago Tortuga',
    main: false,
    borders: ['portopolis']
},
{
    id: 'desfiladero-desertico',
    name: 'Desfiladero desértico',
    main: false,
    borders: ['pastollanos-oeste', 'terramago']
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
    borders: []
}];

var MAIN_ZONES = ZONES.filter(function(el) {
    return el.main;
});
