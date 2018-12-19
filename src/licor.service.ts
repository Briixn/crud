import {Injectable} from "@nestjs/common";
import {Licor} from "./app.controller";

@Injectable()
export class LicorService {
    arreglo: Licor[] = [
        {
            id: 1,
            nombre: 'A',
            descripcion: 'Descripcion de a',
            tipoLicor: {
               // id: 1,
                nombre: "tipoLicor1"
            },
        },
        {
            id: 2,
            nombre: 'B',
            descripcion: 'Descripcion de b ',
            tipoLicor: {
               // id: 1,
                nombre: "tipoLicor1"
            },
        },
        {
            id: 3,
            nombre: 'C',
            descripcion: 'Descripcion de c ',
            tipoLicor: {
                //id: 2,
                nombre: "tipoLicor2"
            },
        },
        {
            id: 4,
            nombre: 'D',
            descripcion: 'Descripcion de d',
            tipoLicor: {
               // id: 3,
                nombre: "tipoLicor3"
            },
        }
    ];
    numeroRegistro = 5;

    crear(licor: Licor): Licor {
        licor.id = this.numeroRegistro;
        this.numeroRegistro++;
        this.arreglo.push(licor);
        return licor;
    }

    eliminar(idLicor: number): Licor {
        const indiceLicor = this.arreglo
            .findIndex(
                (licor) => {
                    return licor.id === idLicor
                }
            );
        const registroEliminado = JSON.parse(JSON.stringify(this.arreglo[indiceLicor]));
        this.arreglo.splice(indiceLicor, 1);

        return registroEliminado;
    }

    actualizar(idLicor: number, nuevaLicor: Licor): Licor {
        const indiceLicor = this.arreglo
            .findIndex(
                (licor) => {
                    return licor.id === idLicor
                }
            );
        this.arreglo[indiceLicor] = nuevaLicor;

        return this.arreglo[indiceLicor]
    }

    buscarPorId(idLicor: number): Licor {
        const indiceLicor = this.arreglo
            .findIndex(
                (licor) => {
                    return licor.id === idLicor
                }
            );
        return this.arreglo[indiceLicor];
    }

}