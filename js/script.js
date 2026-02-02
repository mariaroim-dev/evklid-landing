const swiper = new Swiper ('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

document.querySelectorAll('.section-working__list-btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener ('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.section-working__list-btn').forEach(function(btn) {
      btn.classList.remove('.section-working__list-btn__active')});
      e.currentTarget.classList.add('section-working__list-btn__active');

      document.querySelectorAll('.section-working__container').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('section-working__container__active')});

        document.querySelector(`[data-target="${path}"]`).classList.add('section-working__container__active');
  })
})

$(".accordion").accordion( {
  heightStyle: "content",
  collapsible: true,
  active: false,
  icons: false,
});

$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('#accordeon .ui-accordion-header').on('click', f_acc);
});

function f_acc(){
//скрываем все кроме того, что должны открыть
  $('#accordeon .ui-accordion-content').not($(this).next()).slideUp(5000);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(5000);
}

function f_acc(){
  //скрываем все кроме того, что должны открыть
    $('#accordeon .ui-accordion-content').not($(this).next()).slideDown(5000);
  // открываем или скрываем блок под заголовком, по которому кликнули
      $(this).next().slideToggle(5000);
  }

	document.querySelector('#burger').addEventListener('click', function() {
		document.querySelector('#menu').classList.toggle('is-active')
	})

  document.querySelector('#burger').addEventListener('click', function() {
		document.querySelector('#burger').classList.toggle('open-menu')
	})

  document.querySelector('#search').addEventListener('click', function() {
		document.querySelector('#searching').classList.toggle('searching-active')
	})

  document.querySelector('#search-closed').addEventListener('click', function() {
		document.querySelector('#searching').classList.toggle('searching-active')
	})




