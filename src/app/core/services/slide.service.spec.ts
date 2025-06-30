import { TestBed } from '@angular/core/testing';
import { SlideService } from './slide.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Slidedetail } from '../model/slide';
import { environment } from 'src/environments/environment';


describe('SlideService', () => {
  let service: SlideService;
  let httpController: HttpTestingController;
  let url = environment.apiUrl + '/slides';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideHttpClient(), provideHttpClientTesting() ],
    });
    service = TestBed.inject(SlideService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get the right slide by Id', () =>{
    const id = 1;

    const slideDetail: Slidedetail = {
      id: 1,
      template: 'Template Question 1',
      text: 'Question 1',
      images: [],
      imagesCount: 1,
      audioUrl: 'Auidio',
      backgroundColor: '#ffff',
      textOptions: [],
      isAnimated: false,
      requiresAnswer: false
    };

    service.getSlideById(id).subscribe(res => {
      expect(res).toEqual(slideDetail);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/${id}`,
    });
    req.flush(slideDetail);
  })
});
