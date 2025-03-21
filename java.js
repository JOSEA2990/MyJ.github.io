const users = [
    { user: 'MadeM', pass: '3091#' },
    { user: 'JoseM', pass: '2990#' },
    ];

    const validation = (user, pass) => users.find( ( person ) => (person.user === user) && (person.pass === pass));

    const login = () => {
    const user = document.getElementById( 'Username' ).value;
    const pass = document.getElementById( 'Password' ).value;
    if ( validation(user, pass) !== undefined ) {
    
    window.open('index2.html');
    window.close('index.html');
    
    }
    else {
    alert( 'Usuario o contraseña incorrectos' );
    }
    }

