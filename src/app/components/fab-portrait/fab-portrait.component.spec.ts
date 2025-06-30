import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FabPortraitComponent } from './fab-portrait.component';

describe('FabPortraitComponent', () => {
  let component: FabPortraitComponent;
  let fixture: ComponentFixture<FabPortraitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), FabPortraitComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FabPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
