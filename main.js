Vue.component(name = 'model',{
    template: `<div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      <div class="box">
      <p>hello</p>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>

</div>`
}
);

new Vue({
    el:"#root",
    data:{
         visible:false
       
    }
})