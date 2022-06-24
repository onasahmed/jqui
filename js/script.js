$(document).ready(function(){
    $( "#move" ).draggable({ 
        refreshPositions: true,
        revert: true,
        containment: "parent"});
    $( function() {
    $( "#draggable" ).draggable({
        containment: "parent"
    });
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "bgy" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );
    $( function() {
    $( "#resizable" ).resizable({
      animate: true,
      helper: "ui-resizable-helper"
    });
  } );
    $( function() {
    $( "#selectable" ).selectable();
  } );
    $( function() {
    $( "#sortable" ).sortable({placeholder: "ui-state-highlight"});
    $( "#sortable" ).disableSelection();

  } );
    $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );
    $( function() {
    var availableTags = [

      "Shaon",
      "Onas",
      "Shafayat",
      "Habib",
      "Tunda",
      "Simp",
      "Chalak",
      "Fetnabaj",
      "Ovi",
      "Habibur Rahman"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
    $( function() {
    $( "input" ).checkboxradio({
      
    });
  } );
    $( function() {
    $( "#datepicker" ).datepicker({
      showOn: "button",
      // buttonImage: "images/calender.jpg",
      // buttonImageOnly: true,
      buttonText: "Select date"
    });
  } );
     $( function() {
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );
     $( function() {
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );
  } );
      $( function() {
    $( document ).tooltip();
  } );
      $( function() {
    $( "#tabs" ).tabs();
  } );
      $( function() {
    $( "#slider" ).slider();
  } );
  } );