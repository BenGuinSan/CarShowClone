// Những components nào mà mình muốn truyền 
// vào cho nó props thì nên xây dựng 
// 1 interface props đó 
// gồm những gì và thuộc kiểu dữ liệu nào
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    btnType?: 'button' | 'submit',
    textStyles?: string,
    containerStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean
    handleClick?:  MouseEventHandler<HTMLButtonElement>,
}

// export interface CustomFilterProps {
//     title: 'fuel' | 'year',
// }

export interface SearchBarManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void,
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface OptionProps {
    title: string;
    value: string;
}
  
export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}
  