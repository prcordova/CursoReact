import {TextInput} from '.'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
 

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
     render(<TextInput  handleChange={fn} searchValue={'testando'}/>);
     const input = screen.getByPlaceholderText(/type your search/i);
 
     expect(input.value).toBe('testando');
  });   
  
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
     render(<TextInput  handleChange={fn}  />);

     const input = screen.getByPlaceholderText(/type your search/i);
     const value = 'o valor';

     userEvent.type(input, value); 

     expect(input.value).toBe(value)
     expect(fn).toHaveBeenCalledTimes(value.length);

     userEvent.type(input, '');
     expect(input.value).toBe('');
     expect(fn).toHaveBeenCalledTimes(0);
  });   
});