import LoginForm from './LoginForm';
import { render } from '@testing-library/react';
import React from 'react';



describe('component test :: LoginPage', () => {

  it('renders a loginfield', () => {

    //GIVEN
    const {getByRole} = render(<LoginForm />);

    //WHEN
    const loginField = getByRole('textbox', { name: /username/i });

    //THEN
    expect(loginField).toBeInTheDocument();
  });


});
