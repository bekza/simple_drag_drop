import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const { getByText } = render(<App />); 
  const linkElement = getByText(/item 2/i);
  expect(linkElement).toBeInTheDocument();
});




describe('Asset Editor', () => { 
  it('should reorder asset', async () => {
    const wrapper = mount(<App />);
    const item0 = wrapper.find('[data-rbd-draggable-id="item-0"]');
    item0.simulate('mousedown');
    item0.simulate('mousemove', { clientX: 10, clientY: 50 });
    item0.simulate('mousemove', { clientX: 10, clientY: 150 });
    setTimeout(() => {
      wrapper.update();
      item0.simulate('mouseup');
      expect(wrapper.find('Droppable').text()).toBe('item 1item 2item 0');
    }, 100);
    /*
document.querySelector('[data-rbd-draggable-id=item-0]').dispatchEvent(new MouseEvent('mousedown', {}));
document.querySelector('[data-rbd-draggable-id=item-0]').dispatchEvent(new MouseEvent('mousemove', { clientX: 10, clientY: 50 }));
document.querySelector('[data-rbd-draggable-id=item-0]').dispatchEvent(new MouseEvent('mousemove', { clientX: 10, clientY: 150 }));
setTimeout(() => {
  document.querySelector('[data-rbd-draggable-id=item-0]').dispatchEvent(new MouseEvent('mouseup', {}));
}, 1);
    */
  });
});

// TO START DRAG-DROP:

/*
monitorEvents(document.querySelector('[data-rbd-draggable-id=item-0]'), ["mousedown", "mousemove", "mouseup", "mouseout",  "mouseleave"]); 

- start drag

1. mousedown
2. mousemove

- stop drag / drop

1. mouseup


var item0 = { top: document.querySelector('[data-rbd-draggable-id=item-0]').offsetTop, left: document.querySelector('[data-rbd-draggable-id=item-0]').offsetLeft };
var item1 = { top: document.querySelector('[data-rbd-draggable-id=item-1]').offsetTop, left: document.querySelector('[data-rbd-draggable-id=item-1]').offsetLeft };

console.log(item0, item1);

document.querySelector('[data-rbd-draggable-id=item-0]').dispatchEvent(new MouseEvent('mousedown', {}));

document.querySelector('[data-rbd-draggable-id=item-0]').dispatchEvent(new MouseEvent('mousemove', {
     clientX: 2, clientY: 30,
}));

document.querySelector('[data-rbd-draggable-id=item-0]').dispatchEvent(new MouseEvent('mouseup', {}));

*/

// mousedown mousemove mouseup mouseout mouseleave click

// goal: what are the events we need to `simulate` and what params to pass?

// we figured out from monitorEvents(...) that these are the events that get triggered...

// mousedown
// mousemove
// mouseout // or mouseleave?

// ...


    // click MouseEvent {isTrusted: true, screenX: 231, screenY: 222, clientX: 231, clientY: 88}
    // mouseout MouseEvent {isTrusted: true, screenX: 231, screenY: 222, clientX: 231, clientY: 88, …}
    // mouseover MouseEvent {isTrusted: true, screenX: 231, screenY: 222, clientX: 231, clientY: 88, …}
    // pointerout PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
