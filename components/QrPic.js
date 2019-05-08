const React = require('react');

class QrPic extends React.Component {
  render() {
      const prefix = 'https://assets.amzport.com/haitang/miniqr/story-';
      let id = 0;
      const bool = typeof(window)=='undefined';
      if(!bool){
          id = window.location.pathname.match(/story\/(.*?)\//);
      }
    return (
        <div>
            <img src={`${prefix}${id}`} style={{ maxWidth: '200px',maxHeight: '300px',borderRadius: '8px', display: 'block', margin: '0 auto' }} alt="码" />
        </div>
    );
  }
}

module.exports = QrPic;
