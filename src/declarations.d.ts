import { GuardType } from 'src/types';

declare module 'vue-router' {
  interface RouteMeta {
    guard?: GuardType;
  }
}

declare module '@iamlazy.dev/core' {
  interface ModelMeta {
    _createdAt: Date;
    _updatedAt: Date;
    _deletedAt: Date;
  }
}
