class BreadCrumb {
    filePath = ['root']
    $filePath = null
    $BreadCrumb = null
    constructor({ $target }) {
        this.$BreadCrumb = document.createElement('nav')
        this.$BreadCrumb.className = 'Breadcrumb'
        this.$BreadCrumb.innerHTML = this.filePath.map(
            (data) =>
                `
                    <div>${data}</div>
                `
        ).join(' ')

        this.render()
        $target.appendChild(this.$BreadCrumb)


    }
    setState(nextData) {
        this.filePath.push(nextData)
        this.$BreadCrumb.innerHTML = this.filePath.map(
            (data) =>
                `
                    <div>${data}</div>
                `
        ).join(' ')
        this.render()
    }

    setStateBack() {
        this.filePath.pop()
        this.$BreadCrumb.innerHTML = this.filePath.map(
            (data) =>
                `
                    <div>${data}</div>
                `
        ).join(' ')
        this.render()
    }

    render() {
    }
}