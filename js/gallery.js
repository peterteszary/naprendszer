$(document).ready(function () {
	// Modal megnyitása és kép dinamikus betöltése
	$('.thumbnail a').click(function (event) {
		event.preventDefault(); // Ne kövesse a linket
		var imgSrc = $(this).find('img').attr('src'); // A kép forrásának kinyerése

		// Modal body frissítése
		$('.modal-body').empty(); // Töröljük a modal tartalmát
		var modalContent = '<img src="' + imgSrc + '" class="img-fluid">'; // Kép hozzáadása
		$('.modal-body').append(modalContent); // Modal body-ba való hozzáadás

		// Modal megjelenítése
		$('#modal').modal('show');
	});

	// Modal megjelenítésekor a képek elmosódása
	$('#modal').on('show.bs.modal', function () {
		$('.col-6, .row .thumbnail').addClass('blur');
	});

	// Modal eltüntetésekor a képek elmosódásának eltávolítása
	$('#modal').on('hide.bs.modal', function () {
		$('.col-6, .row .thumbnail').removeClass('blur');
	});
});
