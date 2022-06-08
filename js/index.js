var calendario=(function(){


    var ListaFechas= [
        {        
            startEditable: true,            
            title:"Matutino",
            start: '2022-06-06T08:00:00',
            end: '2022-06-06T17:00:00',
            id:1,
            clave: "Comida"
        },     
        {
            startEditable: true,
            title:"Matutino",
            start: '2022-06-07T08:00:00',
            end: '2022-06-07T17:00:00',
            id:1,
            clave: "LABORAL"
   
        },    
        {
            startEditable: true,
            title: "Despertino",
            start: "2022-06-07T22:30:00-05:00",
            end: "2022-06-08T06:30:00-05:00",
            id: "2",
            clave: "LABORAL"
        } 
        ,
        {
            startEditable: true,                    
            title: "Despertino",
            start: "2022-06-10T22:30:00-05:00",
            end: "2022-06-11T06:30:00-05:00",
            id: "2",
            clave: "LABORAL"
        }
    ];
    
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'es',
        themeSystem: 'standard',
        editable: true,                
        weekNumbers: true,        
        eventDrop: function(fecha){  
           console.log(fecha);             
        },             
        
        customButtons: {
            myCustomButton: {
                text: 'Agregar Horario',
                click: function() {
                    alert("Demo");
                }
            }
        },
        headerToolbar: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth timeGridWeek dayGridDay' 
        },                
        initialDate: new Date(),       
     
        events:ListaFechas
        
    });

    calendar.render();       


})();

