import {config} from './Common/config.es6';
import Init from './Common/Base.es6';
import '../sass/style.scss';

import View from './View/app.jsx';
// const view = new View();
$(window).on('load',e=>{

  window.config = config;
  new Init(config);
})
