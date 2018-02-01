// $('.button-collapse').sideNav({
//     menuWidth: 300, // Default is 300
//     edge: 'left', // Choose the horizontal origin
//     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
//     draggable: true // Choose whether you can drag to open on touch screens,
//   }
// );

var scan = document.getElementById('scan');
var dataShow = document.getElementById('data-show');
var loading = document.getElementById('loading');

scan.addEventListener('click', function(e){
  e.preventDefault();
  loading.classList.add('active');
  this.classList.add('hide');
  setTimeout(function(){
    loading.classList.remove('active');
    dataShow.classList.add('active')
  }, 2500)
})