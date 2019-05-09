const React = require('react');

class HtTimeline extends React.Component {
    state = {
        time: 0,
        load: false,
    };

    increment(e) {
        const list =  this.props.isAppearList;
        const isAppearList = [];
        const objList = this.props.json;
        const itemSyr = e.target.value || e.target.getAttribute('data-value');
        const item = JSON.parse(itemSyr);
        let that = this;
        let submitOk = true;
        objList.map(function(v, idx) {
            if (idx === 0) {
                isAppearList[0] = true;
            } else if ((parseFloat(item.time) < v.time) && add) {
                isAppearList[idx] = true;
                submitOk = false;
            } else if (that.state.load && parseFloat(that.state.time) < v.time) {
                isAppearList[idx] = false;
            } else {
                isAppearList[idx] = list[idx] || false;
            }
        });
        if (!that.state.load) {
            that.setState({
                time: that.props.time,
                load: true,
            });
        }
        this.props.updateProps({
            value: item.value,
            isAppearList,
            time: item.time,
            gain: item.gain,
            submitOk,
        });
    };
  render() {
    const { hasError, idyll, updateProps, options, value, time, gain, json, submitOk, isAppearList, index,  ...props } = this.props;
    return (
        <div {...props} style={{ margin: '8px 0' }}>
            {JSON.stringify(isAppearList)}
          <div>
            {options.map((item, idx) => (
              <div key={item.value + idx} style={{ width: '50%', display: 'inline-block', textAlign: 'center' }}>
                  <input onChange={this.increment.bind(this)} type="radio" name={`radio${index}`} checked={isAppearList[index] && value === item.value} value={JSON.stringify(item)} />
                  <label><span><span></span></span>{item.value}</label>
                  {item.img ? <img onClick={this.increment.bind(this)} data-value={JSON.stringify(item)} style={{ maxWidth: 64, maxHeight: 64, margin: 'auto', }} src={item.img} alt="" /> : null}
              </div>
            ))}
          </div>
      </div>
    );
  }
}

module.exports = HtTimeline;
