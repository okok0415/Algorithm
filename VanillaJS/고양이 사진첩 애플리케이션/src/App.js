class App {
    $target = null
    $data = null
    $filePath = []


    constructor($target) {
        this.$target = $target

        this.breadcrumb = new BreadCrumb({
            $target
        })


        api.fetchRoot().then(res => this.setState({
            data: res,
            loading: false
        }))

        this.nodes = new Nodes({
            $target,
            onClick: data => {
                if (data.id === 'back') {
                    console.log(data)
                    this.breadcrumb.setStateBack()
                    if (!data.arr.length) {
                        api.fetchRoot().then(res => this.setState({
                            data: res
                        }))
                    } else {
                        console.log(data)
                        api.fetchId(data.parent).then(res => this.setState({
                            data: res
                        }))
                    }
                } else {
                    if (data.type === 'DIRECTORY') {
                        this.breadcrumb.setState(data.name)
                        api.fetchId(data.id).then(res => this.setState({
                            data: res
                        }))
                    } else if (data.type === 'FILE') {
                        this.imageview.setState({
                            visible: true,
                            image: data
                        })
                    }
                }
            }

        })

        this.imageview = new ImageView({
            $target,
            data: {
                visible: false,
                image: null
            }
        })


        this.setState({
            loading: true,
            data: null
        })

    }

    setState(nextData) {
        console.log(nextData)
        this.$data = nextData.data
        this.nodes.setState(nextData.data)
    }
}