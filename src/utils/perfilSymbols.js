export const ROLES = {
  ADMIN: Symbol('ADMIN'),
  CLIENTE: Symbol('CLIENTE'),
  TRABAJADOR: Symbol('TRABAJADOR'),
  JEFE: Symbol('JEFE')
};

// lo bueno de usar Symbols es que son únicos y no colisionan entre ellos
// ni se pueden confundir con strings normales ni reescribir accidentalmente