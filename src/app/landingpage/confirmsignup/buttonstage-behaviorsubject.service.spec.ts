import { TestBed } from '@angular/core/testing';

import { ButtonstageBehaviorsubjectService } from './buttonstage-behaviorsubject.service';

describe('ButtonstageBehaviorsubjectService', () => {
  let service: ButtonstageBehaviorsubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonstageBehaviorsubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
