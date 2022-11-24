/* eslint-disable prettier/prettier */
import { IsAlpha, IsFQDN, IsLatLong, IsNotEmpty, IsOptional, IsString, IsUrl, Max, Min } from 'class-validator'

export class CreateMonumentoDto {

    @IsAlpha('en-US', {
        message: 'CountryCode can´t contain numbers.'
    })
    @IsNotEmpty()
    countryCode: string

    @IsString({
        message: 'Country must be a string.'
    })
    @IsNotEmpty()
    country: string

    @IsAlpha('en-US', {
        message: 'City can´t contain numbers.'
    })
    @IsOptional()
    city: string

    @IsString({
        message: 'Location must be a string.'
    })
    @IsNotEmpty()
    @IsLatLong()
    location: string

    @IsAlpha('en-US', {
        message: 'Name can´t contain numbers.'
    })
    @IsNotEmpty()
    name: string

    @IsString({
        message: 'Description must be a string.'
    })
    @IsOptional()
    description: string

    @IsUrl()
    @IsOptional()
    url: string
}
