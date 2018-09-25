export interface IGroupName {
    id: number;
    groupname: string;
}

export class GroupName implements IGroupName {
    constructor(
        public id: number,
        public groupname: string
    ) { }
}
