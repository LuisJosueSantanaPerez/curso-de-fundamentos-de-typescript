"use strict";
// void
// Tipo explicito
function showInfo(user) {
    console.log("User Info", user.id, user.username, user.firstName);
    //return 'Hola';
}
showInfo({ id: 1, username: "darknet", firstName: "Luis" });
// Tipo Inferido
function showFormattedInfo(user) {
    console.log("User Info", `
        id: ${user.id} 
        username: ${user.username}
        first name: ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, username: "darknet", firstName: "Luis" });
// Tipo void, como tipo de dato en variable
let unusable;
// son casos especiales cuando vallan a retornar un null o undefined a un valor void
// si no queremos el modo strict en el archivo type-void lo desactivamos y nos
// dejara pasar el retorno del valor null o undefined, esto se aplica para casos muy especiales;
// unusable = null;
// unusable = undefined;
// Tipo: Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}