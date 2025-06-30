import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UiService } from 'src/app/core/services/ui.service';
import { ModalService } from 'src/app/core/services/modal.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: ModalService;

  const mockNetworkService = {
    status: jasmine.createSpy().and.returnValue(of(true))
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), CommonModule, HeaderComponent],
      providers: [
        { provide: UiService, useValue: mockNetworkService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    component.title = 'Test Title';

    fixture.detectChanges();
  }));

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should show the correct title', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.textContent).toContain('Test Title');
  // });


});
