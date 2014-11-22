 $.ui.useOSThemes=false;

$.ui.splitview=false;
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function crearPedido(){
	division= document.createElement('div');
	division.type='div';
	usa.id='siguiente';
	document.getElementById('fondo3').appendChild(division);
	
	usuario= document.createElement('div');
	usuario.type='div';
	usuario.id='usuario';
	division.appendChild(usuario);
	//document.getElementById('siguiente').appendChild(usuario);
	
	usa=document.createElement('h4');
	usa.type='h4';
	usa= document.createTextNode('Usuario:');
	usuario.appendChild(usa);
	//document.getElementById('usuario').appendChild(usa);
	
	hora=document.createElement('h4');
	hora.type='h4';
	hora= document.createTextNode('Hora:');
	document.getElementById('usuario').appendChild(hora);
	
	total=document.createElement('h4');
	total.type='h4';
	total= document.createTextNode('Total:');
	document.getElementById('usuario').appendChild(total);
	
	ipdedido= document.createElement('div');
	idpedido.type='div';
	idpedido.id='idpedido';
	document.getElementById('siguiente').appendChild(idpedido);
	
	idped=document.createElement('h4');
	idped.type='h4';
	idped= document.createTextNode('Idpedido:');
	document.getElementById('idpedido').appendChild(idped);
	
}