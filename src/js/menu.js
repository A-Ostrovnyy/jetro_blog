
$( '#js-btn' ).click(function() {
  $( '.nav' ).toggleClass( 'is-active' );
  $( '.nav' ).toggleClass( 'visible' );
  $( this ).toggleClass( 'menu-close' );
  $( this ).toggleClass( 'menu-open' );
});
