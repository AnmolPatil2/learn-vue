Vue.component(name = 'tab',{
    template: `<div><div class="tabs">
    <ul>
      <li class="is-active"><a>Pictures</a></li>
      <li><a>Music</a></li>
      <li><a>Videos</a></li>
      <li><a>Documents</a></li>
    </ul>
  </div>
  <div class="tab-details"><slot></slot></div></div>
  `,
  mounted(){
    console.log(this.$children);
  
  }
}

);

new Vue({
    el:"#root",
    data:{
         visible:false
       
    }
})