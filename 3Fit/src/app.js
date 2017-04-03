export class App {
    constructor() {
        this.message = 'Tere tulemast!';
  }
    
    
    configureRouter(config, router) {
        this.router = router;
        config.title = '3Fit Aurelia';
        config.map([
          { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
          { route: 'users',            name: 'users',      moduleId: 'users/index',   nav: true },
        ]);
  }
    
}
