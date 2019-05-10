const React = require('react');

class HTClcchat extends React.Component {
    increment(value) {
        console.log(value)
        this.props.updateProps({
            value,
        });
    };
    componentWillMount(){
        const { data, isAppearList, startMoney } = this.props;
        const list = [];
        const gainList = [];
        for(let i = 0 ; i<20; i+=1){
            gainList.push(this.props[`gain${i + 1}`])
        }
        isAppearList.map((item, index)=>{
            if(item){
                if(index === 0){
                    list.push({x: data[index].time, y: startMoney * 1})
                }else {
                    let money = startMoney;
                    for(let j = 0;j<=index;j+=1){
                        const baifenbi = isAppearList[j] ? gainList[j]:1;
                        money = money*baifenbi;
                    }
                    list.push({x: data[index].time, y: money })
                }
            }
           return item;
        });

        this.increment(list);
    }
    componentWillReceiveProps(nextProps){
        const {value, data, isAppearList, startMoney } = nextProps;
        console.log(nextProps)
        const list = [];
        const gainList = [];
        for(let i = 0 ; i<20; i+=1){
            gainList.push(nextProps[`gain${i + 1}`])
        }
        isAppearList.map((item, index)=>{
            if(item){
                if(index === 0){
                    list.push({x: data[index].time, y: startMoney * 1})
                }else {
                    let money = startMoney;
                    for(let j = 0;j<=index;j+=1){
                        const baifenbi = isAppearList[j] ? gainList[j]:1;
                        money = money*baifenbi;
                    }
                    list.push({x: data[index].time, y: money })
                }
            }
            return item;
        });
        this.increment(list);
    }

  render() {
    const { hasError, idyll, updateProps, options, value, time, gain, json, isDw, isAppearList, index,  ...props } = this.props;
    return (
             null
    );
  }
}

module.exports = HTClcchat;
