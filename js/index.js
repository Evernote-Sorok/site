$('.burger').on('click', function(e) {
  e.preventDefault;
  $('.burger,.menu-header__list,.header__menu').toggleClass('active');
});

$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});