const React = require('react');

class IndexComponents extends React.Component {
  render() {
      function backHome() {
          const href = window.location.search;
          if (href.indexOf('om=p') > -1 && window.wx) {
              wx.miniProgram.navigateBack();
          } else if (href.indexOf('om=s') > -1 && window.wx) {
              wx.miniProgram.redirectTo({
                  url: '/pages/index/index',
              });
          } else {
              history.back()
          }
      }
    return (
        <div style={{ height: '60px'}}>
          <div onClick={backHome} style={{ width: '50px', height: '36px', margin: '12px', borderRadius: '5px', background: 'rgba(123, 123, 123, 0.5)', position: 'fixed', top:0, left:0, color: '#fafafa', lineHeight: '36px', textAlign: 'center', fontWeight: '800' }}>主页</div>
        </div>
    );
  }
}

module.exports = IndexComponents;
