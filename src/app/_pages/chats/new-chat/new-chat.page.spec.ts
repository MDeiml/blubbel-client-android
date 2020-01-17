import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewChatPage } from './new-chat.page';

describe('NewChatPage', () => {
  let component: NewChatPage;
  let fixture: ComponentFixture<NewChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
