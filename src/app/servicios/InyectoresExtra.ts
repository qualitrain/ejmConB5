import { InjectionToken} from '@angular/core';
import { IEmpresa } from './IEmpresa';
export const DATOS_EMPRESA = new InjectionToken<IEmpresa>(
                  'Datos generales Empresa',
                  { 
                        providedIn:"root", 
                        factory: ():IEmpresa => {
                                    return { 
                                          nombre:"Qualitrain Express",
                                          razonSocial:"Qtx de Mexico SA de CV",
                                          rutaLogo:"./assets/img/LogoCuadrado.png"
                                    }; 
                              } 
                 });