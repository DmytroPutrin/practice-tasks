import React, { ReactNode } from 'react';
import Publisher from '../components/observer/publisher';
import Subscriber from '../components/observer/subscriber';
import { Observer } from '../utils/observer';

export class ObserverPage extends React.Component {
  observer = new Observer();

  render(): ReactNode {
    return (
     <div style={{padding: '10px'}}>
       <h3>
         Hello, here is Observer Pattern
       </h3>

       <Publisher observer={this.observer} />
       <Subscriber observer={this.observer} />
     </div>
    );
  }
}

export default ObserverPage;
