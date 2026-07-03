import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { 

  }

  uploadImage(vals:any):Observable<any>{
    let data= vals;
    return this.http.post("https://api.cloudinary.com/v1_1/dcwdkktos/image/upload", data)
    
    }

    uploadImageFromAssets(assetPath: string): Observable<any> {
      return this.http.get(assetPath, { responseType: 'blob' }).pipe(
        switchMap(blob => {
          console.log("Blob:", blob);  // Vérifiez la sortie du Blob
          const formData = new FormData();
          formData.append('file', blob, 'badge.png');
          formData.append('upload_preset', 'ml_default');
          formData.append('cloud_name', 'dcwdkktos');
          console.log("FormData:", formData);  // Voir le contenu du FormData
          return this.http.post(`https://api.cloudinary.com/v1_1/dcwdkktos/image/upload`, formData);
        })
      );
    }
    
}
