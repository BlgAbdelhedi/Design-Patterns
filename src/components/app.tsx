import React from 'react';
import Settings from '../patterns/singleton'
import ButtonFactory from '../patterns/factory'
import HotDogBuilder from '../patterns/builder'
import HouseFascade from '../patterns/fascade';
import range from '../patterns/iterator';


const settings = Settings.getInstance();

const os = 'Android'
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);

const myLunch = new HotDogBuilder('gluten free')
  .addKetchup()
  .addMustard()
  .addKraut();


const client = new HouseFascade();
client.turnOnSystems();
client.shutDown();

for (const n of range(0, 100, 5)) {
  console.log(n);
}

function App() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}
export default App;