import { boot } from 'quasar/wrappers';
import { AuthPlocSimulatorProvider } from '@iamlazy.dev/core/auth';

export const auth = AuthPlocSimulatorProvider(false);

export default boot(() => {
  //
});
