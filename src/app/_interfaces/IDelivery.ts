export interface IDelivery {
    idDelivery?: number;
    region: string;
    homeDelivery: number;
    homeAbroadDelivery: number;
    createdDate?: string;
    paidDate?:string;
    modifiedDate?: string;
    orderNumber?:string;
    isManufacturingStarted?: boolean;
    isManufacturingFinished?:boolean;
    isShaping?: boolean;
    piece?: {
      idPiece: number;
      process: string;
      quantity: number;
      material: string;
      troisPrinting?: string;
      color?: string;
      tolerance?: string;
      thickness?: number;
      technicalDrawing: string;
      additionalNotes: string;
      fileFormat: string;
      filePath: string;
      finish: string;
      user: {
        idUser: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        address: string;
        country: string;
        badge?: string;
        city: string;
        phoneNumber: number;
        codepostal: number;
        role: string;
        photoUrl: string;
        otp?: string;
        otpGeneratedTime?: string;
        active: boolean;
        username: string;
        credentialsNonExpired: boolean;
        accountNonExpired: boolean;
        accountNonLocked: boolean;
        enabled: boolean;
      }
    };
  }
  