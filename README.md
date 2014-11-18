Taller de introducción a Ember
================

En este respositorio podréis encontrar todos los materiales para la realización
del taller de Introducción a [Ember.js](http://emberjs.com/) de [Codemotion 2014
Madrid](http://2014.codemotion.es/en/agenda.html#day2/introduccin-a-emberjs).

El horario actual para dicho taller es el día 22 de noviembre a las 9:45 de la
mañana. Se recomienda por lo tanto venir con el café puesto.

## Instrucciones

Voy adelantando que será necesario tener instalado [Node.js](http://nodejs.org/)
y [ember-cli](http://www.ember-cli.com/). Además,
deberíais visitar este proyecto un par de días antes del taller para bajaros los
archivos necesarios para la realización del mismo y así ahorrar tiempo durante
la charla.

### Instalar las herramientas

1. [Node.js](http://nodejs.org/)
2. [ember-cli](http://www.ember-cli.com/): instalarlo de manera global (`npm
   install -g ember-cli`)
3. [bower](http://bower.io/): instalarlo de manera global (`npm install -g bower`).
4. Tu navegador favorito (mientras que dicho navegador sea Chrome o Firefox,
   que incluso tiene una nueva edición especial desarrollador).
5. Ember Inspector
  1. [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
  2. [Chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
6. Tu editor favorito (aunque [Atom](https://atom.io/) tiene un plugin para
[ember-cli](https://atom.io/packages/ember-cli-helper) y unos pocos snippets
para [ember](https://atom.io/packages/ember-snippets) en sí). Yo seguramente
use VIM.

### Instalar el proyecto

1. Clónalo: `git clone https://github.com/Serabe/codemotion-ember.git cm-em`
2. `cd cm-em`
3. `npm install`
4. `bower install`

### Lanzando el server

`ember server` o `ember s`, para abreviar. Ve a `http://localhost:4200`.

Para ver los tests, ver a `http://localhost:4200/tests/`.

### Building

`ember build --environment production`...

¿Quién querría construir un proyecto con el entorno desarrollo?

## Dudas

> Tengo dudas, ¿cómo te contacto?

Puedes contactarme por [twitter](https://twitter.com/Serabe), pero preferiría
que [abrieses un Issue en Github](https://github.com/Serabe/codemotion-ember/issues/new)
para poder tener las dudas centralizadas.
