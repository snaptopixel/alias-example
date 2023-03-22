import { Component, h, Host, State, Watch } from '@stencil/core/internal';

import { someUtilityFunction } from 'src/utils';
import { createPopper, NanoPop } from '@nanopop';

@Component({
  tag: 'app-root',
})
export class Root {
  @State() showPopper = false;
  @Watch('showPopper')
  onPopper(value) {
    if (value) {
      this.popper.update()
    }
  }
  buttonEl: HTMLButtonElement;
  popperEl: HTMLElement;
  popper: NanoPop;
  componentDidLoad() {
    someUtilityFunction();
    this.popper = createPopper(this.buttonEl, this.popperEl, {
      position: 'bottom'
    })
  }
  render() {
    return (
      <Host class="flex w-screen h-screen justify-center items-center">
        <button ref={el => this.buttonEl = el} onClick={() => (this.showPopper = !this.showPopper)} class="py-1 px-2 rounded-sm bg-blue-100">
          Click me
        </button>
        <aside
          ref={el => this.popperEl = el}
          class={{
            'flex fixed py-1 px-2 rounded-sm shadow-lg border text-blue-500 border-blue-500': true,
            'invisible': !this.showPopper,
          }}
        >
          This is my popper content
        </aside>
      </Host>
    );
  }
}
