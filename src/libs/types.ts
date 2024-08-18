export interface CartItem {
    id: number;
    name: string;
    imageUrl:string;
    price: number;
    description:string;
    discount:number;
    quantity?: number;
  }


  export interface ProductCardProps {
    imageUrl: string;
    name: string;
    price: number;
    onAddToCart: () => void;
    isAddedToCart: Boolean;
    description: string;
    discount: number;
  }

  export interface CartProductProps {
    itemDetails: CartItem;
  }
  


export interface ButtonProps {
    children: React.ReactNode;
    onClick?:()=>void;
    color:string;
  }