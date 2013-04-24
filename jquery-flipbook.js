;(function($, window, document, undefined) {

  $.fn.flipbook2 = function() {
    var flipbook = this;

    var pagesPer = flipbook.data('pages') || '2';

    var pages;
    var oddPages;
    var evenPages;

    var currentPage = 0;
    var pageCount;

    var init = function() {
      if(flipbook.find('.page').length % 2 === 1) {
        flipbook.append('<div class="page"></div>');
      }

      pages = flipbook.find('.page');
      oddPages = flipbook.find('.page:nth-child(odd)');
      evenPages = flipbook.find('.page:nth-child(even)');
      pageCount = pages.length;

      var width = flipbook.css('width');
      pages.css('width', parseInt(width,10)/2);

      pages.each(function(index, page) {
        $(page).css('z-index', pageCount - index)
        if(index > 1) {
          if(index%2 === 1) {
            $(page).addClass('flipped');
          }
          // $(page).addClass('flipped');
          // $(page).addClass('invisible');
        }
      });
    };

    var flipForward = function() {
      if(pageCount > (currentPage + 2)) {
        $(pages[currentPage]).toggleClass('flipped');
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

  //////////////////

  $.fn.flipbook = function() {
    var flipbook = this;
    var pages = flipbook.find('.page');
    var pageCount = pages.length;

    var flipForward = function() {
      console.log('forward');
    };

    var flipBackward = function() {
      console.log('backward');
    };

    flipbook.addClass('flipbook-single');

    pages.each(function(index, page) {
      $(page).css('z-index', pageCount - index);
    });

    $(pages).click(function(e) {
      console.log(e.offsetX);
      if(e.offsetX > flipbook.width()/2) {
        flipForward();
      } else {
        flipBackward();
      }
    });

  }

})(jQuery, window, document);