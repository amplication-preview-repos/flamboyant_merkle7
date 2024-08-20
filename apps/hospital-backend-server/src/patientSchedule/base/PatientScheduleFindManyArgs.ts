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
import { PatientScheduleWhereInput } from "./PatientScheduleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PatientScheduleOrderByInput } from "./PatientScheduleOrderByInput";

@ArgsType()
class PatientScheduleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PatientScheduleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PatientScheduleWhereInput, { nullable: true })
  @Type(() => PatientScheduleWhereInput)
  where?: PatientScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: [PatientScheduleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PatientScheduleOrderByInput], { nullable: true })
  @Type(() => PatientScheduleOrderByInput)
  orderBy?: Array<PatientScheduleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PatientScheduleFindManyArgs as PatientScheduleFindManyArgs };