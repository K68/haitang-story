const React = require('react');

class HtTimeline extends React.Component {
    increment(e) {
        const list =  this.props.isAppearList;
        list[this.props.index] = true;
        let that = this;
        list.map(function(v, idx) {
            if (that.props.index < idx) {
                list[idx] = false;
            }
        });
        const itemSyr = e.target.value || e.target.getAttribute('data-value');
        const item = JSON.parse(itemSyr);
        this.props.updateProps({
            value: item.name,
            isAppearList: list,
            time: item.time,
            gain: item.gain,
        });
    };
  render() {
    const { hasError, idyll, updateProps, options, value, time, isAppearList, index,  ...props } = this.props;
    return (
        <div {...props} style={{ margin: '8px 0' }}>
          <div>
            {options.map((item, idx) => (
              <div key={item.name + idx} style={{ width: '50%', display: 'inline-block', textAlign: 'center' }}>
                  <input onChange={this.increment.bind(this)} type="radio" name={`radio${index}`} checked={isAppearList[index] && value === item.name} value={JSON.stringify(item)} />
                  <label><span><span></span></span>{item.name}</label>
                  {item.img ? <img onClick={this.increment.bind(this)} data-value={JSON.stringify(item)} style={{ maxWidth: 64, maxHeight: 64, margin: 'auto', }} src={item.img} alt="" /> : null}
              </div>
            ))}
          </div>
      </div>
    );
  }
}

module.exports = HtTimeline;
