const React = require('react');

class HtRadio extends React.Component {
    increment(e) {
        let stepSitu = 0;
        stepSitu = this.props.step > this.props.stepSitu? this.props.step : this.props.stepSitu;
        this.props.updateProps({
            value: e.target.value || e.target.getAttribute('data-value'),
            stepSitu: stepSitu,
        });
        setTimeout(() => {
            if (document.getElementsByName(`radio${stepSitu + 1}`)[0]) {
                document.getElementsByName(`radio${stepSitu + 1}`)[0].scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 200);
    };
  render() {
    const { hasError, idyll, updateProps, options, value, stepSitu, step,   ...props } = this.props;
    return (
        <div {...props} style={{ margin: '8px 0' }}>
          <div>
            {options.map((item, index) => (typeof item === 'object' ?
              <div key={item.value + index} style={{ width: '50%', display: 'inline-block', textAlign: 'center' }}>
                  <input onChange={this.increment.bind(this)} type="radio" name={`radio${step}`} checked={value === item.value} value={item.value} />
                  <label onClick={this.increment.bind(this)} data-value={item.value}><span><span></span></span>{item.value}</label>
                  {item.img ? <img onClick={this.increment.bind(this)} data-value={item.value} style={{ maxWidth: 64, maxHeight: 64, margin: 'auto', }} src={item.img} alt="" /> : null}
              </div>
            :
              <div key={item + index} style={{ width: '50%', display: 'inline-block', textAlign: 'center' }}>
                <input onChange={this.increment.bind(this)} type="radio" name={`radio${step}`} value={item} /><label><span><span></span></span>{item}</label>
              </div>
            ))}
          </div>
      </div>
    );
  }
}

module.exports = HtRadio;
