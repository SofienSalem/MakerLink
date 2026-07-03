import { IDelivery } from "./IDelivery";
import { UserForm } from "./userform";

export interface IEstimate {
    idEstimate?: number;
    numberDays?: number | null;
    price?: number | null;
    currency?: string;
    observation?: string;
    disabled?: boolean;
    choice?: boolean;  // Change here
    user?: UserForm;
    delivery?: IDelivery;
  }
  