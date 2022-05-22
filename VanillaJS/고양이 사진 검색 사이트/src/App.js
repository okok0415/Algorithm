console.log("app is running!");

class App {
    $target = null;
    data = [];

    constructor($target) {
        this.$target = $target;

        this.toggle = new Toggle({ $target })

        this.searchInput = new SearchInput({
            $target,
            onSearch: keyword => {
                this.setState({
                    data: null,
                    loading: true
                })

                api.fetchCats(keyword).then(({ data }) => this.setState({
                    data: data,
                    loading: false
                }));
            }
        });

        this.searchResult = new SearchResult({
            $target,
            initialData: this.data,
            onClick: image => {
                api.fetchCatDetails(image.id).then(({ data }) => {
                    this.imageInfo.setState({
                        visible: true,
                        image: data
                    });
                })
            },
        });


        this.imageInfo = new ImageInfo({
            $target,
            data: {
                visible: false,
                image: null
            }
        });
    }

    setState(nextData) {
        console.log(this);
        this.data = nextData;
        this.searchResult.setState(nextData);
    }
}
