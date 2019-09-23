import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../store/actions';

import FormSection from '../cmps/FormSection';
import FormFinal from '../cmps/FormFinal';

function Form() {

  const dispatch = useDispatch();
  const levels = useSelector(state => state.formStore.levels);
  const currLevel = useSelector(state => state.formStore.currLevel);

  const [stateLevels, setStateLevels] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      dispatch(actions.loadFormData()).then(() => {
        dispatch(actions.updateDataFromAPI());
      })
    })();
  }, [dispatch]);

  const updateLevels = (updatedSection, idx) => {
    let copy = (!stateLevels) ? [...levels] : [...stateLevels];
    copy[currLevel - 1].sections[idx] = updatedSection;
    setStateLevels(copy);
  }

  const defiendSections = () => {
    if (levels) {
      if (currLevel < 3) {
        let sections = [...levels[currLevel - 1].sections];
        return sections.map((section, idx) => {
          return <FormSection section={section} key={section._id} isError={isError}
            onUpdateSection={(updatedSection) => updateLevels(updatedSection, idx)} />
        })
      } else {
        var length = levels[1].sections.length;
        var sections1 = JSON.parse(JSON.stringify(levels[1].sections)).slice(0, length - 2);
        var sections2 = JSON.parse(JSON.stringify(levels[1].sections)).slice(length - 2);
        let sec1 = { sections: sections1, title: 'פרטי החומרים' };
        let sec2 = { sections: sections2, title: 'פרטי המשלוח' };
        let levelsOrder = [levels[0], sec1, sec2];
        return <FormFinal levels={levelsOrder} onUpdateLevel={(num) => levelByArg(num)} />
      }
    } else return <div></div>
  }

  const levelByArg = (num) => {
    dispatch(actions.levelByArg(num));
    window.scrollTo(0, 0);
  }
  const levelUp = () => {
    if (currLevel < 3) {
      if (stateLevels) {
        const itErr = dispatch(actions.doesItError(stateLevels[currLevel - 1].sections));
        if (itErr) {
          setIsError(true);
          window.scrollTo(0, 0);
        } else {
          setIsError(false);
          dispatch(actions.levelUp());
          window.scrollTo(0, 0);
        }
      } else {
        setIsError(true);
        window.scrollTo(0, 0);
      }
    }
  }
  const levelDown = () => {
    if (currLevel > 1) {
      dispatch(actions.levelDown());
      window.scrollTo(0, 0);
    }
  }

  var showSections = defiendSections();
  const title = levels ? levels[currLevel - 1].title : '';

  return (
    <div className="form">
      <h1>טופס איכות הסביבה</h1>
      <div>
        {currLevel === 1 && <img src="assets/img/levels/level1.png" alt="levels" />}
        {currLevel === 2 && <img src="assets/img/levels/level2.png" alt="levels" />}
        {currLevel === 3 && <img src="assets/img/levels/level3.png" alt="levels" />}
      </div>

      {showSections &&
        <div className="form-levels">
          <h2>{title}</h2>

          {showSections}

          <div className="buttons flex space-between">
            <button className="back" onClick={() => levelDown()}>
              <img src="assets/img/icons/arrow-right.png" alt="Back" title="Back" />
              <span>חזרה</span>
            </button>
            <button className="next" onClick={() => levelUp()}>{currLevel < 3 ? 'המשך' : 'אישור'}</button>
          </div>
        </div>
      }

    </div>
  );
}

export default React.memo(Form)