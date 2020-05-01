import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoCreatePage } from './todo-create.page';

describe('TodoCreatePage', () => {
  let component: TodoCreatePage;
  let fixture: ComponentFixture<TodoCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
