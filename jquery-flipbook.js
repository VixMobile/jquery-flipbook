;(function($, window, document, undefined) {

  $.fn.flipbook = function() {
    var flipbook = this;

    var height = flipbook.data('height') || '300';
    var width = flipbook.data('width') || '200';
    // var pageCount = flipbook.data('pages') || '2';

    var pages;
    var oddPages;
    var evenPages;

    var currentPage = 0;
    var pageCount;

    var init = function() {
      if(flipbook.find('.page').length % 2 == 1) {
        flipbook.append('<div class="page"></div>');
      }

      pages = flipbook.find('.page');
      oddPages = flipbook.find('.page:nth-child(odd)');
      evenPages = flipbook.find('.page:nth-child(even)');
      pageCount = pages.length;

      flipbook.css('width', parseInt(width, 10)*2);
      pages.css('height', height);
      pages.css('width', width);

      pages.each(function(index, page) {
        if(index > 1) {
          $(page).addClass('flipped');

        }
      });
    };

    var flipForward = function() {
      if(pageCount > (currentPage + 2)) {
        // $(pages[currentPage]).toggleClass('flipped');
        $(pages[currentPage+1]).addClass('flipped');
        currentPage += 2;
        $(pages[currentPage]).removeClass('flipped');
        $(pages[currentPage+1]).removeClass('flipped');
      }
    };

    var flipBackward = function() {
      if(currentPage !== 0) {
        $(pages[currentPage]).addClass('flipped');
        $(pages[currentPage+1]).addClass('flipped');
        currentPage -= 2;
        $(pages[currentPage]).removeClass('flipped');
        $(pages[currentPage+1]).removeClass('flipped');
      }
    };

    var goToFirstPage = function() {
      $(pages[currentPage]).addClass('flipped');
      $(pages[currentPage+1]).addClass('flipped');
      $(pages[0]).removeClass('flipped');
      $(pages[1]).removeClass('flipped');
      currentPage = 0;
    };

    init();
    oddPages.click(flipBackward);
    evenPages.click(flipForward);
    $('.flipbook-first-page').click(goToFirstPage);

  };

})(jQuery, window, document);