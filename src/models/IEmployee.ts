export interface IEmployee {
    name: string;
    image: string;
    title: string;
    bio: string;
    workplace: string;
    mobile: string;
    declarations: IDeclarations;
    department: IDepartment;
}

export interface IDeclarations {
    amount: number;
    possibility: boolean;
}

export interface IDepartment {
    number: number;
    cabinet: string;
    title: string;
    schedule: ISchedule;
}

export interface ISchedule {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
}