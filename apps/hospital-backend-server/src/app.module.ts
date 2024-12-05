import { Module } from "@nestjs/common";
import { CustomerProfileModule } from "./customerProfile/customerProfile.module";
import { PatientScheduleModule } from "./patientSchedule/patientSchedule.module";
import { DoctorModule } from "./doctor/doctor.module";
import { PatientRegistrationFormModule } from "./patientRegistrationForm/patientRegistrationForm.module";
import { BillingInformationModule } from "./billingInformation/billingInformation.module";
import { UserModule } from "./user/user.module";
import { PatientManagementModule } from "./patientmanagement/patientmanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    LoggerModule,
    CustomerProfileModule,
    PatientScheduleModule,
    DoctorModule,
    PatientRegistrationFormModule,
    BillingInformationModule,
    UserModule,
    PatientManagementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
