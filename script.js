
let user = document.getElementById("user");
let password = document.getElementById("password");
let boton = document.getElementById("button");

boton.addEventListener("click", (e) =>{
    e.preventDefault();
    
    const usuarioInput = user.value;
    const passwordInput = password.value;

    const foundUser = usuarios.find((usuario) => usuario.user === usuarioInput && usuario.password === passwordInput);

    if (foundUser) {
        // alert("Inicio de sesión exitoso");
                window.location="home/index.html";
    } else {
        alert("Los datos son incorrectos. Por favor, inténtalo de nuevo.");
        window.location="index.html"
    }


})



const usuarios=[
    {
        id:1,
        name:'jhon',
        user:'cristancho',
        password:'1234',
    },
    {
        id: 2 ,
        name : 'juanito' ,
        user : 'juanito12' ,
        password :'0987',
    },

]

