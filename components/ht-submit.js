const React = require('react');

class HtSubmit extends React.Component {
    submit = () => {
        const { submitOk, useDate, xSquared, datiKey } = this.props;
        if (submitOk) {
            const time = (new Date().getTime() - useDate)/1000;
            this.props.updateProps({
                date: time,
                value: true,
            });
            let id = 486;
            const bool = typeof(window)=='undefined';
            if(!bool){
                id = window.location.pathname.match(/\/story\/(.*?)\//)[1];
            }
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://hi.amzport.com/api/data/setAnswer", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({
                datiKey: `${datiKey}${id}`,
                datiDate: [xSquared, time],
            }));
        } else {
            alert("题目没答完");
        }
    };

  render() {
    const { hasError, idyll, updateProps, submitOk, xSquared, useDate, datiKey,   ...props } = this.props;
    return (
        <div {...props} onClick={this.submit}>
            <span style={{
                display: 'block',
                borderRadius: '6px',
                height: '45px',
                lineHeight: '45px',
                textAlign: 'center',
                color: '#fff',
                fontSize: '16px',
                background: '#1ea0fa',
                width: '200px',
                margin: '25px auto',
                textDecoration: 'none' }}>提交</span>
        </div>
    );
  }
}

module.exports = HtSubmit;
