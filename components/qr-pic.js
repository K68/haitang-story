const React = require('react');

class QrPic extends React.Component {
    constructor(){
        super();
        this.state = {
            imgSrc: '',
        }
    }
    componentDidMount() {
        const prefix = 'https://assets.amzport.com/haitang/miniqr/story-';
        let id = 0;
        const bool = typeof(window)=='undefined';
        if(!bool){
            const macth = window.location.pathname.match(/\/story\/(.*?)\//);
            if(macth){
                id = macth[1];
            }
        }
        if(!bool){
            this.setState({
                imgSrc: `${prefix}${id}`,
            })
        }
    }
  render() {
    return (
        <div>
            {this.state.imgSrc?
                <img src={this.state.imgSrc} style={{ maxWidth: '200px',maxHeight: '300px',borderRadius: '8px', display: 'block', margin: '0 auto' }} alt="码" />
                 :
                 null
            }
      </div>
    );
  }
}

module.exports = QrPic;
