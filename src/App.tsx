import { SetStateAction, useState } from 'react';
import './App.css';
import { NumInput } from './NumInput';
import { Select } from './Select';
import { Slider } from './Slider';

export const App = () => {
  const dietOptions = ['Standard'];
  const unitOptions = ['Imperial', 'Metric'];
  const activityOptions = [
    'Sedentary',
    'Lightly Active',
    'Moderately Active',
    'Very Active',
    'Extremely Active',
  ];
  const goalOptions = [
    'Lose Weight',
    'Slowly Lose Weight',
    'Maintain Weight',
    'Slowly Gain Weight',
    'Gain Weight',
  ];

  const [age, setAge] = useState(18);
  const [weight, setWeight] = useState()
  const [proteinVal, setProteinVal] = useState(1.0);
  const [carbPercent, setCarbPercent] = useState(50);
  

  const handleAgeChange = (e: {
    target: { value: SetStateAction<number> };
  }) => {
    setAge(e.target.value);
  };

  const handleProteinChange = (e: {
    target: { value: SetStateAction<number> };
  }) => {
    setProteinVal(e.target.value);
  };

  const handleCarbSplitChange = (e: {
    target: { value: SetStateAction<number> };
  }) => {
    setCarbPercent(e.target.value);
  };

  // const [maleSelected, setMaleSelected] = useState(true);
  // const handleGenderSelect = (e) => {
  //   console.log(e.target.value);
  //   setMaleSelected((s) => !s);
  //   // console.log(maleSelected);
  // };

  return (
    <div className="App">
      <h1 className="text-4xl">Calorie and Macro Calculator</h1>
      <div className="container mx-auto">
        <Select label={'Diet'} options={dietOptions} />
        <Select label={'Units'} options={unitOptions} />
        <NumInput label={'Age'} value={age} onChange={handleAgeChange} />
        <NumInput label={'Weight'} value={weight} onChange={handleWeightChange}/>
        <NumInput label={'Height'} value={height} onChange={handleHeightChange}/>

        <div className="container flex-col">
          <label className="label">Sex</label>
          <div className="btn-group flex">
            <input
              type="radio"
              name="sex"
              className="btn"
              data-title="Male"
              checked
            />
            <input
              type="radio"
              name="sex"
              className="btn"
              data-title="Female"
            />
          </div>
        </div>

        <Select label={'Activity Level'} options={activityOptions} />
        <Select label={'Goal'} options={goalOptions} />

        <Slider
          label={'Daily Protein'}
          min={0.82}
          max={1.5}
          step={0.01}
          value={proteinVal}
          unit={'g'}
          onChange={handleProteinChange}
        />
        <Slider
          label={'Daily Carb/Protein Split'}
          min={0}
          max={100}
          step={1}
          value={carbPercent}
          unit={`/${100 - carbPercent}`}
          onChange={handleCarbSplitChange}
        />
      </div>
      <div className="container">
        <h1>Test Display</h1>
        <div>Age: {age}</div>
      </div>
    </div>
  );
};
