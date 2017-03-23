const EventEmitter = require( 'events' );

class ChatApp extends EventEmitter {
  /**
  *@param {String} title
  */

  constructor( title ) {
    super();

    this.title = title;

    //Посылать каждую секунду сообщение
    setInterval( () => {
      this.emit( 'message', `${ this.title }: ping-pong ${new Date()}` );
    }, 1000 );

    this.close = () => this.emit( 'close' );
  }
}

module.exports = { ChatApp };
