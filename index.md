// 头部组件
  <div style="height: 60px;">
    <div onclick={backHome()} style="width: 50px; height: 36px; margin: 12px; border-radius: 5px; background: rgba(123, 123, 123, 0.5); position: fixed; color: #fafafa; line-height: 36px; text-align: center; font-weight: 800">主页</div>
  </div>

<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
<script>
  function backHome() {
      const href = window.location.search;
      if (href.indexOf('om=p') > -1 && window.wx) {
          wx.miniProgram.navigateBack();
      } else if (href.indexOf('om=s') > -1 && window.wx) {
          wx.miniProgram.redirectTo({
              url: '/pages/index/index',
          });
      } else {
          history.back()
      }
  }
</script>