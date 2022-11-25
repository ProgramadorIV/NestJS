/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Monumento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'country_code',
        nullable: false
    })
    countryCode: string;

    @Column({
        name: 'country',
        nullable: false
    })
    country: string;

    @Column({
        name: 'city',
        nullable: true
    })
    city: string;

    @Column({
        name: 'location',
        nullable: false
    })
    location: string;

    @Column({
        name: 'name',
        nullable: false
    })
    name: string;

    @Column({
        name: 'description',
        nullable: true
    })
    description: string;

    @Column({
        name: 'url',
        nullable: true
    })
    url: string;
}
