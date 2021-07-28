import {
  DeepReadonly, onMounted, onUnmounted, readonly, ref,
} from 'vue';
import type { Ploc } from '@iamlazy.dev/core';
import type { Ref } from 'vue';

const usePlocState = <S>(ploc: Ploc<S>): DeepReadonly<Ref<S>> => {
  const state = ref(ploc.state) as Ref<S>;

  const stateSubscription = (newState: S) => {
    state.value = newState;
  };

  onMounted(() => ploc.subscribe(stateSubscription));

  onUnmounted(() => ploc.unsubscribe(stateSubscription));

  return readonly(state);
};

export default usePlocState;
