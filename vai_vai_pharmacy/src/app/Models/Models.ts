export interface ICompanyTable{
    id:number,
    CompanyName:string
}

export interface IMedicineCatagoryTable{
    id:number,
    MedicineCatagoryName: string
}

export interface IStrengthTable{
    id: number,
    StrengthName:string
}

export interface IMadecineDetails{
    id:number,
    MedicineName:string,
    MedicineCatagory:string,
    MedicineGenericName:string,
    CompanyName:string,
    strangth:string,
    SideEffect:string,
    Consumer:string,
    ConsumeType:string
}