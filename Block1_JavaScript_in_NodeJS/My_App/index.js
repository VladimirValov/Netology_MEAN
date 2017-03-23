const codeExample = `function funcExample( text ) {
  console.log( "Тест" );
  console.log( "Тест" );

  if ( true ) {
    console.log( "Тест" );
  }
}`;

console.log( codeExample );
console.log( "\n" );

let codeUp = codeUpSize( codeExample );

codeUpReadeble( codeUp );



function codeUpReadeble ( code ) {
  let codeUp = ""

  let level = 0;   // уровень вложености {}
  let newLine = "\n";

  for( i = 0; i < code.length; i++ ) {
    let s = code[ i ];

    // { code }

    if ( s == '{' ) {
      level++;
      newLine = "\n" + "  ".repeat(level);
      codeUp += " " + s + newLine;
    }

    else if ( s == '}' ) {
      level--;
      newLine = "\n" + "  ".repeat(level);
      codeUp += newLine + s + "\n";
    }

    // ( "text" ) [ variable ]

    else if ( s == '(' || s == '[' ) {
      codeUp += s + " ";
    }

    else if ( s == ')' || s == ']' ) {
      codeUp += " " + s;
    }

    //  ;
    else if ( s == ';'  ) {
      codeUp += s + newLine;
    }

    /*
    else if ( s == 'i' || code[ i + 1 ] == 'f' ) {

      console.log(code[ i ], code[ i + 1]);
      codeUp += newLine + "if";
      i++;
    }
    */

    else {
      codeUp += s;
    }
  }
  console.log(codeUp);

  return codeUp;
}

function codeUpSize ( code ) {
  let codeUp = ""

  console.log( "Begin length =  " + code.length );

  for( i = 0; i < code.length; i++ ) {
    let s = code[ i ];

    if ( s == " " ) {
      if ( code[ i-1 ] != "n" || code[ i-1 ] == "t" ) {
        continue ;
      }
    }

    if ( s == "\n" ) {
      continue ;
    }

    codeUp += s;
  }
  console.log( "Finish length =  " + codeUp.length );
  console.log ( "Compress " + Math.round (codeUp.length / code.length * 100) + "%\n" );
  console.log( codeUp );

  return codeUp;

}
