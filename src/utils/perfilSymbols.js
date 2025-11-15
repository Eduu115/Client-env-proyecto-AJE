export const ROLES = {
  ADMIN: "ROLE_ADMIN",
  CLIENTE: "ROLE_CLIENTE",
  TRABAJADOR: "ROLE_TRABAJADOR",
  JEFE: "ROLE_JEFE",
  GUEST: "GUEST"
};

// jerarquía de poder SEGUN el rol:
/*
  ANTES: solo con los perfiles, si uno era admin, SOLO podia acceder a admin, se me ocurre para solucionarlo:
  - en vez de proteger por perfiles, protejo por permisos, asi el admin tiene permisos en TODAS las paginas y el resto no.
  asi puedo permitir fusionar roles y permisos
*/
export const PERMISOS = {
  [ROLES.ADMIN]: 4,
  [ROLES.JEFE]: 3,
  [ROLES.TRABAJADOR]: 2,
  [ROLES.CLIENTE]: 1,
  [ROLES.GUEST]: 0
};
