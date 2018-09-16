
$( '.hamburger' ).click(function() {
  $( '.nav' ).toggleClass( 'is-active' );
  $( '.nav' ).toggleClass( 'visible' );
  $( this ).toggleClass( 'menu-isclose' );
  $( this ).toggleClass( 'menu-isopen' );
});
