import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, delay } from 'rxjs';
import { MOCK_EXTRACTION_RESPONSE } from './mock-data';
import { REASSIGN_MOCK_EXTRACTION_RESPONSE } from './reassign-groups-mock-data';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  
  constructor(private http: HttpClient) {}

  uploadFiles(files: File[]): Observable<any> {
    const formData = new FormData();
    files.forEach(file => {
      // Send the PDF as a file upload using multipart/form-data
      formData.append('documents', file);
    });

    return this.http.post('http://127.0.0.1:8000/v1/extractions/batch', formData).pipe(
      map(() => MOCK_EXTRACTION_RESPONSE),
      catchError(() => of(MOCK_EXTRACTION_RESPONSE))
    );
  }

  updateGroup(payload: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/v1/groups/update', payload).pipe(
      delay(1500),
      map(() => REASSIGN_MOCK_EXTRACTION_RESPONSE),
      catchError((err) => {
        console.warn('Update group API failed or not running, mocking success', err);
        return of(REASSIGN_MOCK_EXTRACTION_RESPONSE).pipe(delay(1500));
      })
    );
  }
}



