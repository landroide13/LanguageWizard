import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { SlideshowService } from './slideshow.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Slideshow } from '../model/slideshow';

describe('SlideshowService', () => {
  let service: SlideshowService;
  let httpController: HttpTestingController;

  let url = environment.apiUrl + '/slideshows';

  const mockSlideshow: Slideshow = {
      id: 1,
      slides: [{ "id": 0, "order": 2, "template": "IMAGE_TITLE_SENTENCE" },]
    }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        provideHttpClient(), 
        provideHttpClientTesting(),
        SlideshowService
      ]
    });
    service = TestBed.inject(SlideshowService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get the right Slideshow by Id', () =>{
      const id = 1;
  
      service.getSlide(id).subscribe(res => {
        expect(res).toEqual(mockSlideshow);
      });
      const req = httpController.expectOne({
        method: 'GET',
        url: `${url}/${id}`,
      });
      req.flush(mockSlideshow);
    })
});
