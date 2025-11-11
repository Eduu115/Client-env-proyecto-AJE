export function irALogin(navigate){
    navigate('/login')
}

export function irARegister(navigate){
    navigate('/registro')
}

export function irAInicio(navigate){
    navigate('/')
}

export function irAHome(navigate){
    // Aquí iría el fetch a perfiles y la validacion para ver, segun su perfil, a qué inicio redirige (Anthony que te follen)👌
    navigate('/cliente/inicio')
}