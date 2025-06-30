import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepPage } from './step.page';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { LevelService } from 'src/app/core/services/level.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { IonicModule } from '@ionic/angular';
import { LevelDetail } from 'src/app/core/model/levelDetail';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from 'src/app/components/header/header.component';

describe('StepPage', () => {
  let component: StepPage;
  let fixture: ComponentFixture<StepPage>;
  let httpController: HttpTestingController;
  let levelService: LevelService;
  let levelServiceSpy: jasmine.Spy;
  let service: ModalService;

  beforeEach(async() => {
    fixture = TestBed.createComponent(StepPage);
    component = fixture.componentInstance;

    const mockLevel: LevelDetail = {
      id: 0,
      title: "A0",
      steps: [
        { "id": 0, "title": "1", "slideshowId": 1 }
      ]
    }
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        IonicModule,
        HeaderComponent
      ],
      declarations: [StepPage],
      providers: [
        LevelService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
    
    httpController = TestBed.inject(HttpTestingController);
    
    levelService = TestBed.inject(LevelService);
    service = TestBed.inject(ModalService);
    
    levelServiceSpy = spyOn(levelService, 'levelDetail').and.returnValue(of(mockLevel))

    //fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Should load all Steps', () => {
  //   fixture.detectChanges();
  //   expect(levelServiceSpy).toHaveBeenCalled();
  // });

});
 