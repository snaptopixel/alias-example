import { Component, h, Host, State } from '@stencil/core/internal';

import { someUtilityFunction } from 'src/utils';
import {} from '@nanopop/';

@Component({
  tag: 'app-root',
})
export class Root {
  @State() showPopper = false;
  componentDidLoad() {
    someUtilityFunction();
  }
  render() {
    return (
      <Host class="p-12 flex">
        <button onClick={() => (this.showPopper = !this.showPopper)} class="py-1 px-2 rounded-sm bg-blue-100">
          Click me
        </button>
        <aside
          class={{
            'py-1 px-2 rounded-sm shadow-lg border text-blue-500 border-blue-500': true,
            'invisible': !this.showPopper,
          }}
        >
          This is my popper content
        </aside>
      </Host>
    );
  }
}
