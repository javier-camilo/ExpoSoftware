import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileResponse } from '../comite/Pendon/Models/file-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadDownloadService {
  constructor(private http: HttpClient) {}

	uploadFiles(files: File[]) {
		const formData: FormData = new FormData();
		Array.from(files).map((file, index) => {
			return formData.append('file' + index, file, file.name);
		});
		return this.http.post<FileResponse[]>('api/UploadDownload', formData, {
			reportProgress: true,
			observe: 'events'
		});
	}

	downloadFile(fileName: string, downloadName?: string): Observable<Blob> {
		return this.http.get<Blob>(
			`api/UploadDownload?fileName=${fileName}&downloadName=${
				downloadName ? downloadName :
				fileName}`,
			{ reportProgress: true, responseType: 'blob' as 'json' }
		);
	}
}
