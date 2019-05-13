const React = require('react');
const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } = require('Recharts');
const dateFormat = (date, fmt) => {
    if (!date) {
        return '';
    }
    const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds(), // eslint-disable-line
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)); // eslint-disable-line
    }
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) { // eslint-disable-line
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))); // eslint-disable-line
        }
    }
    return fmt;
};
class HTChart extends React.Component {
  render() {
    return (
        <div
            style={{ backgroundImage: 'linear-gradient(60deg, #8BC34A, #8BC34A)', padding: 5, borderRadius: 5, }}
        >
            <LineChart width={300} height={300} data={this.props.data}
                       margin={{top: 5, right: 30, left: 0, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="category" domain={['dataMin', 'dataMax']} dataKey="x" tickFormatter={timestamp => (dateFormat(new Date(timestamp.toString()), 'yyyy.MM'))} axisLine={{ stroke: 'white' }} tickLine={{ stroke: 'white' }} tick={{ fill: 'white', fontSize: '12px' }} />
                <YAxis domain={[dataMin => (dataMin < 0 ? (dataMin * 1.2).toFixed(2) : -10), dataMax => ((dataMax * 1.2).toFixed(0))]} axisLine={{ stroke: 'white' }} tickLine={false} tick={{ fill: 'white', fontSize: '12px' }} />
                <Tooltip
                    labelFormatter={timestamp => (dateFormat(new Date(timestamp.toString()), 'yyyy.MM'))}
                    cursor={{ fill: 'red' }}
                    itemStyle={{ color: 'red' }}
                />
                <Line dataKey="y" stroke="#ffffffba" fill="#ffffffba" strokeWidth={3} />
            </LineChart>
        </div>
    );
  }
}

module.exports = HTChart;
