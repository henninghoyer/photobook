var Page = function() {

  var config = {
    $book : $( '#photobook' ),
    $navNext : $( '#btn-nav-next' ),
    $navPrev : $( '#btn-nav-prev' ),
    $navFirst : $( '#btn-nav-first' ),
    $navLast : $( '#btn-nav-last' )
  };

  var init = function() {
    initEvents();
  };

  var initEvents = function() {
    config.$navFirst.click(function() {
      if(!onFirstPage()) {
        $('#photobook .active-page').toggleClass('active-page');
        $('#photobook .page').first().toggleClass('active-page');
        toggleButtonState();
      }
    });

    config.$navPrev.click(function(){
      if(!onFirstPage()) {
        var current = $('#photobook .active-page');
        current.toggleClass('active-page');
        current.prev().toggleClass('active-page');
        toggleButtonState();
      }
    });
    
    config.$navNext.click(function(){
      if(!onLastPage()) {
        var current = $('#photobook .active-page');
        current.toggleClass('active-page');
        current.next().toggleClass('active-page');
        toggleButtonState();
      }
    });
    
    config.$navLast.click(function() {
      if(!onLastPage()) {
        $('#photobook .active-page').toggleClass('active-page');
        $('#photobook .page').last().toggleClass('active-page');
        toggleButtonState();
      }
    });
  };

  var toggleButtonState = function() {
    var nav = $('nav');
    var activePage = $('#photobook .active-page');

    //are we at either end of the slideshow?
    if(onFirstPage()) {
      //disable navPrev & navFirst
      config.$navPrev.toggleClass('disabled');
      config.$navFirst.toggleClass('disabled');
      
      if(config.$navNext.hasClass('disabled')) {
        config.$navNext.toggleClass('disabled');
        config.$navLast.toggleClass('disabled');
      }
    } else if(onLastPage()) {
      //disable navPrev & navFirst
      config.$navNext.toggleClass('disabled');
      config.$navLast.toggleClass('disabled');
      
      if(config.$navPrev.hasClass('disabled')) {
        config.$navPrev.toggleClass('disabled');
        config.$navFirst.toggleClass('disabled');  
      }
    } else {
      nav.children('.disabled').toggleClass('disabled');
    }  
  };

  var onLastPage = function() {
    var activePage = $('#photobook .active-page');

    if(activePage.next().length === 0) {
      return true;
    } else {
      return false;
    }
  };

  var onFirstPage = function() {
    var activePage = $('#photobook .active-page');

    if(activePage.prev().length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return {
    init: init
  };

}();