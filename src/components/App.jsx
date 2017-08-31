class App extends React.Component {
  constructor() {
    super();
    this.state = { videos : window.exampleVideoData,
                  current : window.exampleVideoData[0]};
  }

 clickHandler(video) {
   console.log('state changed to', video);
   //Currently console logging event. Didn't pass parameters into clickHandlefunciton. Investigate binding
   this.setState({current : video});
 }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickHandle={this.clickHandler.bind(this)} />
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
