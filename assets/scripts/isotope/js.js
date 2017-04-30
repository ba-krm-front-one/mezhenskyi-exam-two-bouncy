(() => {
    function useIsotope(event) {

        // init Isotope
        let isotopeGrid = new Isotope( '.ba-works', {
            itemSelector: '.ba-grid-item',
            percentPosition: true,
            masonry: {
                // use element for option
                    columnWidth: '.ba-grid-item',
                    gutter: 20,
                    fitWidth: true,

                }
        });
        // init Isotope with jQuery
        /*let isotopeGrid = $( '.ba-works').isotope({
         itemSelector: '.ba-grid-item',
         percentPosition: true,
         masonry: {
         // use element for option
         columnWidth: '.ba-sizer'
         }
         });*/

        let applyFilterFromLink = (linkObject) => {
            let filterValue = linkObject.dataset.filter;
            // let filterValue = event.target.dataset.filter;
            // use matching filter function
            isotopeGrid.arrange({ filter: filterValue });
        };

        let filterGrid = function( event ) {
            event.preventDefault();

            applyFilterFromLink(this);

            let activeBtn = document.querySelector('.ba-active');
            if (activeBtn) {
                activeBtn.classList.remove('ba-active');
            }
            this.classList.add('ba-active');
        };

        document.querySelectorAll('.ba-filter-btn').forEach(filterBtn => {
            filterBtn.addEventListener( 'click', filterGrid);
        });


        let activeBtn = document.querySelector('.ba-active');

        applyFilterFromLink(activeBtn);
    }

    document.addEventListener('DOMContentLoaded', useIsotope);
})();
