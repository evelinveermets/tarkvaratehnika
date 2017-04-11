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
          { route: 'toitumiskavaankeet', name: 'toitumiskavaankeet', moduleId: 'toitumiskavaankeet/toitumiskavaankeet',   nav: true },
          { route: 'treeningkavaankeet', name: 'treeningkavaankeet', moduleId: 'treeningkavaankeet/treeningkavaankeet',   nav: true },
          { route: 'treeningtoitumiskavaankeet', name: 'treeningtoitumiskavaankeet', moduleId: 'treeningtoitumiskavaankeet/treeningtoitumiskavaankeet',   nav: true }

        ]);
  }
    
}
