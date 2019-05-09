const React = require('react');

class HtTest extends React.Component {
    state = {
        grade: 0,
        times: 0,
        num: 0,
    };

    componentDidMount() {
        const datiKey = this.props.datiKey;
        let id = 486;
        const bool = typeof(window)=='undefined';
        if(!bool){
            const macth = window.location.pathname.match(/\/story\/(.*?)\//);
            if(macth){
                id = macth[1];
            }
        }
        const that = this;
        this.queryAnswer(function (jsCg) {
            that.setState({
                grade: parseInt(jsCg.data[1], 10),
                times: parseInt(jsCg.data[2], 10),
                num: parseInt(jsCg.data[0],10),
            });
        },  `${datiKey}${id}`)
    }

    queryAnswer = (done, datiKey) => {
       var xhr = new XMLHttpRequest();
       xhr.open("POST", "https://hi.amzport.com/api/data/queryAnswer", true);
       xhr.setRequestHeader("Content-Type", "application/json");
       xhr.onreadystatechange=function(){
           if (xhr.readyState === 4){
               done(JSON.parse(xhr.responseText));
           }
       };
       xhr.onerror = function(){
           done('');
       };
       xhr.send(JSON.stringify({
           datiKey,
       }));
    };

  render() {
    const { hasError, idyll, updateProps, datiKey,  ...props } = this.props;
    return (
        <div {...props} style={{ display: 'flex', justifyContent: 'space-around', color: '#757575' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h3>答题人次</h3>
                <p>{this.state.num}次</p>
            </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h3>平均分数</h3>
              <p>{this.state.grade}分</p>
          </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h3>平均用时</h3>
                <p>{this.state.times}秒</p>
            </div>
      </div>
    );
  }
}

module.exports = HtTest;
