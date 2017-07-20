;(() => {
    function useIsotope(event) {

		let isotopeGrid = new Isotope( '.ba-grid', {
			itemSelector: '.ba-grid__item',
			layoutMode: 'masonry',
			masonry: {
				horizontalOrder: true

			}
		});

        let applyFilterFromLink = (linkObject) => {
            let filterValue = linkObject.dataset.filter;
            // let filterValue = event.target.dataset.filter;
            // use matching filter function
            isotopeGrid.arrange({ filter: filterValue });
        };

        let filterGrid = function( event ) {
            event.preventDefault();

            applyFilterFromLink(this);

            let activeBtn = document.querySelector('.ba-filter__btn--active');
            if (activeBtn) {
                activeBtn.classList.remove('ba-filter__btn--active');
            }
            this.classList.add('ba-filter__btn--active');
        };

        document.querySelectorAll('.ba-filter__btn').forEach(filterBtn => {
            filterBtn.addEventListener( 'click', filterGrid);
        });


        let activeBtn = document.querySelector('.ba-filter__btn--active');

        applyFilterFromLink(activeBtn);
    }

    document.addEventListener('DOMContentLoaded', useIsotope);
})();
