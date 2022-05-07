class History {
    constructor(params) {
        this.routes = params.routes ?? [];
        this.index = params.index ?? 0;
        this.max = params.max ?? 0;
    }
    goForward(steps = 1) {
        const lastIndex = this.routes.length - 1;
        const newIndex = this.index + steps;

        this.index = (newIndex <= lastIndex) ? newIndex : lastIndex;

        return this;
    }
    goBack(steps = 1) {
        const firstIndex = 0;
        const newIndex = this.index - steps;

        this.index = (newIndex >= firstIndex) ? newIndex : firstIndex;

        return this;
    }
    addPath(route) {
        const lastIndex = this.routes.length - 1;

        const doesExceed = this.routes.length >= this.max;
        const isFull = this.max && doesExceed;

        const prevRoutes = (this.index < lastIndex)
            ? this.routes.slice(0, this.index + 1)
            : this.routes.slice(isFull, this.routes.length);

        const newRoutes = [ ...prevRoutes, route ];

        this.routes = newRoutes;

        return this;
    }
    getRoutes() {
        return [ ...this.routes ];
    }
    getLastRoute() {
        return this.routes[this.index];
    }
}