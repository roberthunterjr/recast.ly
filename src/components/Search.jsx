var Search = (props) => {

  var handleClick = (e) => {
    var value = $('.form-control').val();
    props.fetchVideos(value);
  };

  var handleChange = () => {
    var value = $('.form-control').val();
    props.fetchVideos(value);
  };

  return  (
    <div className="search-bar form-inline">
      <input onChange={handleChange} className="form-control" type="text" />
        <button onClick={handleClick} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
