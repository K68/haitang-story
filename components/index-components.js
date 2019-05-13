const React = require('react');

class IndexComponents extends React.Component {
  render() {
      function backHome() {
          let ua = window.navigator.userAgent.toLowerCase(); // eslint-disable-line
          const href = window.location.search;
          if (href.indexOf('om=p') > -1 && window.wx) {
              wx.miniProgram.navigateBack();
          } else if (href.indexOf('om=s') > -1 && window.wx) {
              wx.miniProgram.redirectTo({
                  url: '/pages/index/index',
              });
          } else if (ua.match(/MicroMessenger/i) == 'micromessenger') {
              window.open('https://hi.amzport.com/app/'); // eslint-disable-line
          } else {
              history.back()
          }
      }
    return (
        <div>
          <div
              onClick={backHome}
              style={{
                  width: 36,
                  height: 35,
                  margin: 16,
                  borderRadius: '50%',
                  position: 'fixed',
                  bottom: '20%',
                  right: 0,
                  color: '#fafafa',
                  lineHeight: '36px',
                  textAlign: 'center',
                  fontWeight: '800',
                  boxShadow: '0px 0px 3px 1px #BDBDBD',
                  padding: '8px',
                  background: 'white',
              }}>
               <img src="https://assets.amzport.com/haitang/app/dati/home.png" style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}/>
          </div>
        </div>
    );
  }
}

module.exports = IndexComponents;
