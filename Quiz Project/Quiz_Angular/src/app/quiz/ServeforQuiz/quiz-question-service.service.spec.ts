import { TestBed } from '@angular/core/testing';

import { QuizQuestionServiceService } from './quiz-question-service.service';

describe('QuizQuestionServiceService', () => {
  let service: QuizQuestionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizQuestionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
