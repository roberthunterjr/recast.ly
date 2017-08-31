class App extends React.Component {
  constructor() {
    super();
    this.state = {videos : window.exampleVideoData, current : window.exampleVideoData[0]};
  }

  changeCurrent(video) {
    this.setState({current : video});
  }

  changeVideos(videos) {
    this.setState({videos});
  }

  fetchVideos(query) {
    var options = {
      query,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };
    console.log(options);
    window.searchYouTube.call(this, options, this.changeVideos.bind(this));
  }

  componentDidMount() {
    var q = 'angular';
    console.log(q);
  //  this.state = {videos : {}, current : {};};
    this.fetchVideos.call(this, q);
    this.setState({current : this.state.videos[0]});
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search fetchVideos = {this.fetchVideos.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} changeCurrent={this.changeCurrent.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


//Refactoring into ES6 classical pattern
