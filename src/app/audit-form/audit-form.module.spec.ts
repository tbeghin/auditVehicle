import { AuditFormModule } from './audit-form.module';

describe('AuditFormModule', () => {
  let auditFormModule: AuditFormModule;

  beforeEach(() => {
    auditFormModule = new AuditFormModule();
  });

  it('should create an instance', () => {
    expect(auditFormModule).toBeTruthy();
  });
});
