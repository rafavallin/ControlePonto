import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';

import { HttpRequest, HttpResponse, HttpClient } from '@angular/common/http';
import { HttpService } from '../../../../services/http/http.service';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { IAppState } from '../../../../interfaces/app-state';
import { BasePageComponent } from '../../../base-page';
import { Observable, Observer } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'page-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class PageUploadComponent extends BasePageComponent implements OnInit, OnDestroy {
  fileList: any[];
  defaultImageList: any[];

  imageList1: any[];
  imageList2: any[];

  loading: boolean;
  avatarUrl: string;

  uploading: boolean;
  uploadList: UploadFile[];

  showUploadList: any;
  photoWallList: any;

  previewImage: string | undefined;
  previewVisible: boolean;

  constructor(
    private msg: NzMessageService,
    private http: HttpClient,
    httpSv: HttpService,
    store: Store<IAppState>
  ) {
    super(store, httpSv);

    this.demoCode = `
<nz-upload nzAction="https://jsonplaceholder.typicode.com/posts/">
    <button tc-button [beforeIcon]="'icofont-upload'">Click to upload</button>
</nz-upload>
`;

    this.pageData = {
      title: 'Upload',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Form',
          route: 'dashboard',
        },
        {
          title: 'Components',
          route: 'dashboard',
        },
        {
          title: 'Upload',
        },
      ],
    };

    this.loading = false;

    this.fileList = [
      {
        uid: 1,
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png'
      },
      {
        uid: 2,
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png'
      },
      {
        uid: 3,
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png'
      }
    ];

    this.defaultImageList = [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: -2,
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }
    ];

    this.imageList1 = [...this.defaultImageList, this.defaultImageList[0]];
    this.imageList2 = [...this.defaultImageList];

    this.uploading = false;
    this.uploadList = [];

    this.showUploadList = {
      showPreviewIcon: true,
      showRemoveIcon: true,
      hidePreviewIconInNonImage: true
    };

    this.photoWallList = [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }
    ];

    this.previewVisible = false;
    this.previewImage = '';
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJPG = file.type === 'image/jpeg';
      if (!isJPG) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      // check height
      this.checkImageDimension(file).then(dimensionRes => {
        if (!dimensionRes) {
          this.msg.error('Image only 300x300 above');
          observer.complete();
          return;
        }

        observer.next(isJPG && isLt2M && dimensionRes);
        observer.complete();
      });
    });
  };

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  private checkImageDimension(file: File): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image();
      img.src = window.URL.createObjectURL(file);

      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        window.URL.revokeObjectURL(img.src!);
        resolve(width === height && width >= 300);
      };
    });
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.loading = false;
        break;
    }
  }

  handleChangeUpload({ file, fileList }: { [key: string]: any }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  beforeUploadManually = (file: UploadFile): boolean => {
    this.uploadList = this.uploadList.concat(file);
    return false;
  };

  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts/', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploading = false;
          this.fileList = [];
          this.msg.success('upload successfully.');
        },
        () => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
  }
}
