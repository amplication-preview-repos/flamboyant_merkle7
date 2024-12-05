/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PatientRegistrationFormWhereUniqueInput } from "./PatientRegistrationFormWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PatientRegistrationFormUpdateInput } from "./PatientRegistrationFormUpdateInput";

@ArgsType()
class UpdatePatientRegistrationFormArgs {
  @ApiProperty({
    required: true,
    type: () => PatientRegistrationFormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PatientRegistrationFormWhereUniqueInput)
  @Field(() => PatientRegistrationFormWhereUniqueInput, { nullable: false })
  where!: PatientRegistrationFormWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PatientRegistrationFormUpdateInput,
  })
  @ValidateNested()
  @Type(() => PatientRegistrationFormUpdateInput)
  @Field(() => PatientRegistrationFormUpdateInput, { nullable: false })
  data!: PatientRegistrationFormUpdateInput;
}

export { UpdatePatientRegistrationFormArgs as UpdatePatientRegistrationFormArgs };
