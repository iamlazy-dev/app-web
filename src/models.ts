export interface AppModule {
  id: string;
  name: string;
  desc: string;
  devName: string;
}

export interface UserAppModule extends AppModule {
  installed?: boolean;
}

export interface AppModuleUI {
  iconOnNav: string;
}
