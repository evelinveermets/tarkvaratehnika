export class App {
    constructor() {
        this.message = 'Tere tulemast!';
  }
    
    
    configureRouter(config, router) {
        this.router = router;
        config.title = '3Fit Aurelia';
        config.map([
          { route: ['', 'home'], name: 'home', moduleId: 'home/index' },
          { route: 'sisselogimine', name: 'sisselogimine', moduleId: 'sisselogimine/sisselogimine',   nav: true },
          { route: 'avaleht', name: 'avaleht', moduleId: 'avaleht/avaleht',   nav: true },
          { route: 'pealeht', name: 'pealeht', moduleId: 'pealeht/pealeht',   nav: true },
          { route: 'minukonto', name: 'minukonto', moduleId: 'minukonto/minukonto',   nav: true },
          { route: 'treenerid', name: 'treenerid', moduleId: 'treenerid/treenerid',   nav: true },
          { route: 'paroolitaastamine', name: 'paroolitaastamine', moduleId: 'paroolitaastamine/paroolitaastamine',   nav: true },
          { route: 'meist', name: 'meist', moduleId: 'meist/meist',   nav: true },
          { route: 'hinnakiri', name: 'hinnakiri', moduleId: 'hinnakiri/hinnakiri',   nav: true },
          { route: 'treener_avaleht', name: 'treener_avaleht', moduleId: 'treener_avaleht/treener_avaleht',   nav: true },
          { route: 'treener_minukonto', name: 'treener_minukonto', moduleId: 'treener_minukonto/treener_minukonto',   nav: true },
          { route: 'treener_tellijad', name: 'treener_tellijad', moduleId: 'treener_tellijad/treener_tellijad',   nav: true },
          { route: 'treener_sisselogimine', name: 'treener_sisselogimine', moduleId: 'treener_sisselogimine/treener_sisselogimine',   nav: true },
          { route: 'ankeet/:productId', name: 'ankeet', moduleId: 'ankeet/ankeet'},
          { route: 'galerii', name: 'galerii', moduleId: 'galerii/galerii',   nav: true },
          { route: 'kysimustiku_vastused/:id', name: 'kysimustiku_vastused', moduleId: 'kysimustiku_vastused/kysimustiku_vastused'}
        ]);
  }
    
}
