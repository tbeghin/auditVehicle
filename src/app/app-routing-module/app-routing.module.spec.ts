import { AppRoutingModuleModule } from './app-routing.module';

describe('AppRoutingModuleModule', () => {
  let appRoutingModuleModule: AppRoutingModuleModule;

  beforeEach(() => {
    appRoutingModuleModule = new AppRoutingModuleModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModuleModule).toBeTruthy();
  });
});
