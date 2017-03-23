const ChatApp = require ( './ChatApp' ).ChatApp;

let webinarChat = new ChatApp( 'webinar' );
let facebookChat = new ChatApp( 'facebook' );
let vkChat = new ChatApp( 'vkontakte' );


let chatOnMessage = ( message ) =>   console.log( message );
let goAnswer =      () => console.log( "Готовлюсь к ответу" );
let closeChat =     () => console.log( 'Чат закрылся' );

webinarChat.on( 'message', goAnswer );
webinarChat.on( 'message', chatOnMessage );

facebookChat.on( 'message', chatOnMessage );

vkChat.on( 'message', chatOnMessage );
vkChat.on( 'message', goAnswer );
vkChat.setMaxListeners( 2 );

vkChat.on( 'close', closeChat );
vkChat.close();

//Закрыть вконтакте
setTimeout( () => {
  console.log( 'Закрываю вконтакте...' );
  vkChat.removeListener( 'message', chatOnMessage );
}, 5000 );

//Закрыть фейсбук
setTimeout( () => {
  console.log( 'Закрываю фейсбук...' );
  facebookChat.removeListener( 'message', chatOnMessage );
}, 10000 );

//Закрыть вебинар
setTimeout( () => {
  console.log("Закрываем Webinar");
  webinarChat.removeListener( 'message', chatOnMessage );
}, 15000 );
