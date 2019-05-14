const React = require('react');

class HTClcchat extends React.Component {
    increment(value) {
        this.props.updateProps({
            value,
        });
    };
    componentWillMount(){
        const { data, isAppearList, startMoney } = this.props;
        const list = [];
        const gainList = [];
        for(let i = 0 ; i<20; i+=1){
            if(this.props[`gain${i + 1}`]){
                gainList.push(this.props[`gain${i + 1}`])
            }
        }
        let laterIndex = 0;
        let isApperTureCount = 0;
        isAppearList.map((item, index)=>{
            if(item){
                isApperTureCount++;
                let money = startMoney;
                for(let j = 0;j<index;j+=1){
                    const baifenbi = isAppearList[j] ? gainList[j]:1;
                    money = money*baifenbi;
                }
                laterIndex = index;
                list.push({x: data[index].time, y: money })
            }
           return item;
        });
        const time = this.props.time;
        if(isApperTureCount !== 1){
            list.push({x:time, y: list[list.length-1].y * gainList[laterIndex]});
        }
        this.increment(list);
    }
    componentWillReceiveProps(nextProps){
        const {value, data, isAppearList, startMoney } = nextProps;
        const list = [];
        const gainList = [];
        for(let i = 0 ; i<20; i+=1){
            if(this.props[`gain${i + 1}`]){
                gainList.push(this.props[`gain${i + 1}`])
            }
        }
        let laterIndex = 0;
        let isApperTureCount = 0;
        isAppearList.map((item, index)=>{
            if(item){
                    isApperTureCount++;
                    let money = startMoney;
                    for(let j = 0;j<index;j+=1){
                        const baifenbi = isAppearList[j] ? gainList[j]:1;
                        money = money*baifenbi;
                    }
                    laterIndex = index;
                    list.push({x: data[index].time, y: money })
            }
            return item;
        });
        const time = nextProps.time;
        if(isApperTureCount !== 1){
            list.push({x:time, y: list[list.length-1].y * gainList[laterIndex]});
        }
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
