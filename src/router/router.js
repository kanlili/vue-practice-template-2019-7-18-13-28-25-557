export  default function(config,defaultComponent){
    this.currentComponent=defaultComponent;
    if(config.path===window.location.pathname){
        this.currentComponent=config.componnent;
    }
}