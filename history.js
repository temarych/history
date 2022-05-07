class History {
    constructor(path, max) {
        this.paths = [path];
        this.index = 0;
        this.max = max;
    }
    goForward(steps = 1) {
        const lastIndex = this.paths.length - 1;
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
    addPath(path) {
        const lastIndex = this.paths.length - 1;
        const isFull = this.paths.length >= this.max;

        const prevPaths = (this.index < lastIndex)
            ? this.paths.slice(0, this.index + 1)
            : this.paths.slice(isFull, this.paths.length);

        const newPaths = [...prevPaths, path];

        this.paths = newPaths;

        return this;
    }
    getPaths() {
        return [ ...this.paths ];
    }
}