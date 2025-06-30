import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelPage } from './level.page';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { provideHttpClient } from '@angular/common/http';
import { LevelService } from 'src/app/core/services/level.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Level } from 'src/app/core/model/level';

describe('LevelPage', () => {
  let component: LevelPage;
  let fixture: ComponentFixture<LevelPage>;
  let httpController: HttpTestingController;
  let levelService: LevelService;
  let levelServiceSpy: jasmine.Spy;

  beforeEach(async() => {

    const mockLevels: Level[] = [
      { "id": 0, "languageCode": "en", "title": "A0" },
      { "id": 1, "languageCode": "en", "title": "A1" },
    ]

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        IonicModule
      ],
      declarations: [LevelPage],
      providers: [
        LevelService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelPage);
    component = fixture.componentInstance;
    httpController = TestBed.inject(HttpTestingController);

    levelService = TestBed.inject(LevelService);

    levelServiceSpy = spyOn(levelService, 'getLevels').and.returnValue(of(mockLevels))

    //fixture.detectChanges();
  });

  afterEach(() => {
    httpController.verify(); 
  });

  it('Should Be create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Should load levels', () => {
    fixture.detectChanges();
    expect(levelServiceSpy).toHaveBeenCalled();
  });

});
