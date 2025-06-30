import { TestBed } from '@angular/core/testing';
import { LevelService } from './level.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Level, LevelResponse } from '../model/level';
import { LevelDetail } from 'src/app/core/model/levelDetail';
import { Step } from '../model/step';

describe('LevelService', () => {
  let service: LevelService;
  let httpController: HttpTestingController;

  let url = environment.apiUrl + '/levels';

  const mockLevelDetail: LevelDetail = {
    id: 1,
    title: 'A1',
    steps: [{"id": 0, "title": "1", "slideshowId": 1 }]
  }

  const mockLevels: Level[] = [
    { id: 1, title: 'A1',languageCode: 'en'},
    { id: 2, title: 'A0',languageCode: 'en'},
  ];

  const mockLevelcResponse: LevelResponse = {
    levels: mockLevels
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        provideHttpClient(), 
        provideHttpClientTesting(), 
        LevelService 
      ],
    });
    service = TestBed.inject(LevelService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get All the Levels', () =>{

    service.getLevels().subscribe(levels =>{
      expect(levels).toEqual(mockLevels)
    })
    const req = httpController.expectOne(url);
    expect(req.request.method).toBe('GET');

    req.flush(mockLevelcResponse);
  })

  it('Should get the right Level by Id', () =>{
      const id = 1;
  
      service.levelDetail(id).subscribe(res => {
        expect(res).toEqual(mockLevelDetail);
      });
      const req = httpController.expectOne({
        method: 'GET',
        url: `${url}/${id}`,
      });
      req.flush(mockLevelDetail);
    })

});
