const React = require('react');

class HtRadio extends React.Component {
    increment(e) {
        this.props.updateProps({
            value: e.target.value || e.target.getAttribute('data-value'),
        });
    };
  render() {
    const { hasError, idyll, updateProps, options, value, ...props } = this.props;
    return (
        <div {...props} style={{ margin: '8px 0' }}>
          <div>
            {options.map((item, index) => (typeof item === 'object' ?
              <div key={item.label + index} style={{ width: '50%', display: 'inline-block' }}>
                  <input onClick={this.increment.bind(this)} type="radio" name="radio" checked={value === item.value} value={item.value} />
                  <label><span><span></span></span>{item.label}</label>
                  {item.img ? <img onClick={this.increment.bind(this)} data-value={item.value} style={{ maxWidth: 64, maxHeight: 64, margin: 0, paddingLeft: 24 }} src={item.img} alt="" /> : null}
              </div>
            :
              <div key={item + index}>
                <input onClick={this.increment.bind(this)} type="radio" name="radio" value={item} /><label><span><span></span></span>{item}</label>
              </div>
            ))}
          </div>
      </div>
    );
  }
}

module.exports = HtRadio;
