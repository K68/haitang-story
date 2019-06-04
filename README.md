    1.垃圾处理
    如果 选中的跟正确答案不同
    显示 蛋壳属于的正确答案
    [Conditional if:` radio1 !== right1 `]
            [Display value: `'1."蛋壳"  属于  ' + right1` /]
    [/Conditional]
    总分
    [derived name:'xSquared' value:`0 +
     (radio1 === right1? 5:0) +
     (radio2 === right2? 5:0) +
     (radio3 === right3? 5:0) +
     (radio4 === right4? 5:0) +
     (radio5 === right5? 5:0) +
     (radio6 === right6? 5:0) +
     (radio7 === right7? 5:0) +
     (radio8 === right8? 5:0) +
     (radio9 === right9? 5:0) +
     (radio10 === right10? 5:0) +
     (radio11 === right11? 5:0) +
     (radio12 === right12? 5:0) +
     (radio13 === right13? 5:0) +
     (radio14 === right14? 5:0) +
     (radio15 === right15? 5:0) +
     (radio16 === right16? 5:0) +
     (radio17 === right17? 5:0) +
     (radio18 === right18? 5:0) +
     (radio19 === right19? 5:0) +
     (radio20 === right20? 5:0)`
      /]
      是否答完
      [derived name:'isDw' value: `radio1 &&
          radio2&&
          radio3&&
          radio4&&
          radio5&&
          radio6&&
          radio7&&
          radio8&&
          radio9&&
          radio10&&
          radio11&&
          radio12&&
          radio13&&
          radio14&&
          radio15&&
          radio16&&
          radio17&&
          radio18&&
          radio19&&
          radio20`
      /]
      2.房市和股市
      把数据交给HTClcchat 处理
        [HTClcchat
           value: chart
            isAppearList: isAppearList
             time: investmentTime
             data: myData
              startMoney: startMoney
                gain1:gain1
                gain2:gain2
                gain3:gain3
                gain4:gain4
                gain5:gain5
                gain6:gain6
                gain7:gain7
                gain8:gain8
                gain9:gain9
                gain10:gain10
                gain11:gain11
                gain12:gain12
                gain13:gain13
                gain14:gain14
                gain15:gain15
                gain16:gain16
                gain17:gain17
                gain18:gain18
                gain19:gain19
                gain20:gain20
                /]