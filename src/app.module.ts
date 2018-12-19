import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {LicorService} from "./licor.service";

@Module({
    imports: [],  // MODULOS
    controllers: [AppController],  // Controllers
    providers: [
        AppService,
        LicorService
    ], // Servicios
})
export class AppModule {
}
