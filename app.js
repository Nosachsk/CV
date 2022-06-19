
    const el = document.getElementById('drag');
      
    $('div[class^="card"]').draggable(
    {containment: '#content', snap: '#content', scroll:false},{stack: "div"},
    {start: function(){
    el.style.display = 'none';
    }}
    );

    $('div[class^="card"]').resizable({
        containment: "#content"                    
            
        });

    $('.ui-resizable').removeClass( "ui-resizable" ); //without this resizing the first div was making the second one move.

    $('div[class^="minicard"]').draggable(
    {containment: '#restraint', axis:'x', scroll:false},
    {stack: "div"});

    $('div[class^="login"]').draggable();

    