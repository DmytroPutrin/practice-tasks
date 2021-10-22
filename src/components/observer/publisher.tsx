import React from 'react';
import { Observer } from '../../utils/observer';
import { Button, Form, TextArea } from 'semantic-ui-react';

function Publisher(props: { observer: Observer}) {
  return (
    <div>
      <h4>Publisher</h4>
      <Form>
        <TextArea
          placeholder='Message for Subscriber'
        />
        <br/>
        <br/>
        <Button content='Send Message to Subscriber' primary/>
      </Form>
    </div>
  );
}

export default Publisher;
