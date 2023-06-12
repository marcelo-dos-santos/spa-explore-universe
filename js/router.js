export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }


    route(event) {
        event = event || window.event
        event.preventDefault();
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
            if (window.location.pathname === '/universe') {
            document.querySelector('body').style.backgroundImage = 'url("./assets/mountains-universe-2.png")';
            } 
            if (window.location.pathname === '/') {
                document.querySelector('body').style.backgroundImage = 'url("./assets/mountains-universe-1 1.png")';
            }
            if (window.location.pathname === '/exploration') {
                document.querySelector('body').style.backgroundImage = 'url("./assets/mountains-universe-3.png")';
            }
        })
    }
}

export default new Router()