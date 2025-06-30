import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient,  HttpClient  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Language, LanguageResponse } from '../model/language';

describe('LanguageService', () => {
  let service: LanguageService;
  let httpController: HttpTestingController;

  const mockLanguages: Language[] = [
    { code: 'de', name: 'German' },
    { code: 'en', name: 'English' }
  ];

  const mockResponse: LanguageResponse = {
    languages: mockLanguages
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        provideHttpClient(),  
        provideHttpClientTesting(),
        LanguageService 
      ],
    });
    service = TestBed.inject(LanguageService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get All the Languages', (done) =>{

    service.getLanguages().subscribe(languages =>{
      expect(languages).toEqual(mockLanguages);
      done()
    })
    const req = httpController.expectOne(`${environment.apiUrl}/languages`);
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  })
 
});
