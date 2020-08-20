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
    // const Droppable = wrapper.find('Droppable').find('Draggable');
    const Droppable = wrapper.find('Droppable').get(0);

    console.log('Droppable => ', Droppable);
    
  });
    // it('Test click event', () => {
    //   const mockCallBack = jest.fn();
    //   const Droppable = wrapper.find('Droppable').find('Draggable').at(1)
    //   const app = mount((<App onClick={mockCallBack} />));
    //   app.find("data-rbd-droppable-id='droppable'").simulate('click');
    //   expect(mockCallBack.mock.calls.length).toEqual(1);
    //   expect(wrapper.find(Foo).first().props().foo).to.equal('bar');
    // });
});





    // click MouseEvent {isTrusted: true, screenX: 231, screenY: 222, clientX: 231, clientY: 88}
    // mouseout MouseEvent {isTrusted: true, screenX: 231, screenY: 222, clientX: 231, clientY: 88, …}
    // mouseover MouseEvent {isTrusted: true, screenX: 231, screenY: 222, clientX: 231, clientY: 88, …}
    // pointerout PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
