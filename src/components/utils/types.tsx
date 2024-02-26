export type snackbarType ={
    isOpen:boolean,
    message: string,
    isError: boolean,
  }

export type TextAreaComponentType = {
    modalHandler: (value: boolean) => void;
    isModalOpen: boolean;
    data: string;
    handler:(data:string)=>void;
    componentTitle: string;
    index:number
  }


 export type TextAreaHOCProps = {
    WrappedComponent:React.FunctionComponent<TextAreaComponentType>
    handler:(value:string) => void;
    data:string;
    componentTitle:string;
  
}