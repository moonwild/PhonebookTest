export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    group: string;
    photoPath: string;
    contactPreference: string;
    phoneNumber?: number;
    email?: string;
}

export class Contact implements IContact {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public dateOfBirth: Date,
        public group: string,
        public photoPath: string,
        public contactPreference: string,
        public phoneNumber?: number,
        public email?: string,
    ) { }
}

